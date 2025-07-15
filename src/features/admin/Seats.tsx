import { Breadcrumb, Button, Col, Drawer, Dropdown, Form, Input, Row, Select, Switch, Table } from "antd"
import axios from "axios"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useModal from "antd/es/modal/useModal";
import { useWatch } from "antd/es/form/Form";
import _ from "lodash";

function Seats(props: any) {
  const [modal, contextHolder] = useModal();
  const params = useParams();
  const [data, setData] = useState<any>([]);
  const [item, setItem] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [openBulk, setOpenBulk] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const typeValue = useWatch('type', form);
  useEffect(() => {
    onRead();

  }, [])
  const onBulk = async () => {
    let values = form2.getFieldsValue(true);
    values.screenId = params.sid;
    try {
      await form2.validateFields();
      axios.post(`${import.meta.env.VITE_API_URL}seats/bulk`, values).then(res => {
        form2.resetFields()
        onRead();
        setOpenBulk(false);
      })
    } catch (errorInfo) {
      console.log('❌ Validation Failed:', errorInfo);
    }
  };
  const onCreate = async () => {
    try {
      await form.validateFields();
      axios.post(`${import.meta.env.VITE_API_URL}seats`, setFormData()).then(res => {
        form.resetFields()
        onRead();
        setOpen(false);
      })
    } catch (errorInfo) {
      console.log('❌ Validation Failed:', errorInfo);
    }
  };
  const onUpdate = () => {
    axios.put(`${import.meta.env.VITE_API_URL}seats/${item.id}`, setFormData()).then(res => {
      form.resetFields()
      setOpen(false);
      onRead();
    })
  };
  const onRead = () => {
    axios.get(`${import.meta.env.VITE_API_URL}seats/${params.sid}/byscreen`).then(res => {




      setData(res.data);

    })
  }
  const onDelete = (row: any) => {
    axios.delete(`${import.meta.env.VITE_API_URL}seats/${row.id}`).then(res => {
      setOpen(false);
      onRead();
    })
  }
  const setFormData = () => {
    let values = form.getFieldsValue(true);
    values.theaterId = params.id;
    values.screenId = params.sid;
    return values;
  }
  return (
    <>
      {contextHolder}
      <div className="flex items-center gap-[20px] px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold">Seats</div>
        <Breadcrumb>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Theatres</Breadcrumb.Item>
          <Breadcrumb.Item>Screens</Breadcrumb.Item>
          <Breadcrumb.Item>Seats</Breadcrumb.Item>
        </Breadcrumb>
        <div className="ml-auto flex gap-[10px]">
          <Button type="primary" onClick={() => setOpenBulk(true)}>Create Bulk</Button>
          <Button type="primary" onClick={() => setOpen(true)} ghost>Add New</Button>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] p-[20px]">
        {data.map((group: any) =>
          <div className="flex flex-col gap-[10px]">
            <div>{group.group}</div>
            {group.rows.map((row: any) =>
              <div className="flex gap-[10px]">
                <div className="size-[30px] flex items-center justify-center rounded border bg-black text-white">{row.row}</div>
                {row.columns.map((column: any) =>
                  <div className="flex gap-[10px]">
                    <div className="size-[30px] flex items-center justify-center rounded border">{column.column}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* <div className="inline-flex flex-col gap-[10px] p-[20px]">
        {data.map((row: any, i: any) => <div className="flex flex-wrap gap-[10px]" key={i}>
          <div className="size-[30px] text-xs border border-gray-300 bg-gray-300 flex items-center justify-center hover:border-blue-500">
            <div className="flex flex-col">
              <div>{row.row}</div>
              <div className="text-xs text-gray-400 -mt-[5px]">{row.x}</div>
            </div>
          </div>
          {
            row.columns.map((column: any, i: any) => <Dropdown key={i} menu={{
              items: [
                { key: '1', label: "Update" },
                { key: '2', label: "Delete" },
              ], onClick: ({ key }) => {
                switch (key) {
                  case "1":
                    setOpen(true); setItem(column); setIsEdit(true);
                    break;
                  case "2":
                    modal.confirm({
                      title: 'Delete the task',
                      icon: <i className="fi fi-exclamation"></i>,
                      content: 'Are you sure to delete this?',
                      onOk() {
                        onDelete(column)
                      }
                    });
                    break;
                }
              }
            }} placement="bottomRight" trigger={['click']} className={`
              ${column.type == 'basic' ? 'size-[30px] text-xs border border-gray-300 flex items-center justify-center hover:border-blue-500' : ''}
              ${column.type == 'blank' ? 'size-[30px] text-xs border border-transparent flex items-center justify-center hover:border-blue-500' : ''}
              ${column.type == 'break' ? 'w-full h-[30px] bg-gray-100 border border-transparent flex items-center justify-center hover:border-blue-500' : ''}
              `}>
              <div className="flex flex-col">
                <div>{column.column}</div>
                <div className="text-xs text-gray-400 -mt-[5px]">{column.y}</div>
              </div>
            </Dropdown>)
          }
        </div>)}
      </div> */}




      <Drawer
        title={isEdit ? 'Update Record' : 'Add Record'}
        onClose={() => { setOpen(false); setIsEdit(false); setItem({}) }}
        open={open}
        afterOpenChange={(val) => {
          if (isEdit) {
            form.setFieldsValue(item)
          } else {
            form.resetFields()
          }
        }}
        footer={<>{isEdit ? <Button type="primary" onClick={onUpdate}>Update</Button> : <Button type="primary" onClick={onCreate}>Create</Button>}</>}
      >
        <Form layout="vertical" form={form} requiredMark={false} >
          <Row gutter={16}>
            <Col span={12} >
              <Form.Item label="X" name="x" initialValue="0" rules={[{ required: true }]} >
                <Input />
              </Form.Item>

            </Col>
            <Col span={12}>
              <Form.Item label="Y" name="y" initialValue="0" rules={[{ required: true }]} >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Type" name="type" initialValue="blank" rules={[{ required: true }]} >
                <Select>
                  <Select.Option value="basic">Basic</Select.Option>
                  <Select.Option value="blank">Blank</Select.Option>
                  <Select.Option value="break">Break</Select.Option>
                </Select>

              </Form.Item>
            </Col>



            {typeValue === "basic" && <>
              <Col span={24} >
                <Form.Item label="Number" name="number" rules={[{ required: true }]} >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Price" name="price" initialValue="0" rules={[{ required: true }]} >
                  <Input />
                </Form.Item>
              </Col>
            </>}

          </Row>
        </Form>
      </Drawer>
      <Drawer
        title="Create Bulk"
        onClose={() => { setOpenBulk(false); }}
        open={openBulk}
        footer={<Button type="primary" onClick={onBulk}>Create</Button>}
      >
        <Form layout="vertical" form={form2} requiredMark={false} >
          <Row gutter={16}>
            <Col span={8} >
              <Form.Item label="Start" name="start" initialValue="A" rules={[{ required: true }]} >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} >
              <Form.Item label="End" name="end" initialValue="Z" rules={[{ required: true }]} >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} >
              <Form.Item label="Range" name="range" initialValue="20" rules={[{ required: true }]} >
                <Input />
              </Form.Item>
            </Col>

            <Col span={12} >
              <Form.Item label="Column Reverse" name="columnReverse" initialValue={false} rules={[{ required: true }]} >
                <Switch />
              </Form.Item>
            </Col>

            <Col span={12} >
              <Form.Item label="Row Reverse" name="rowReverse" initialValue={false} rules={[{ required: true }]} >
                <Switch />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
export default Seats
