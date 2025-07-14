import { Breadcrumb, Button, Col, Drawer, Dropdown, Form, Input, Row, Select, Table } from "antd"
import axios from "axios"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useModal from "antd/es/modal/useModal";
import { useWatch } from "antd/es/form/Form";

function Seats(props: any) {
  const [modal, contextHolder] = useModal();
  const params = useParams();
  const [data, setData] = useState<any>([]);
  const [item, setItem] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
   const typeValue = useWatch('type', form);
  useEffect(() => {
    onRead();

  }, [])
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
    axios.get(`${import.meta.env.VITE_API_URL}seats/byscreen/${params.sid}`).then(res => {
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
        <div className="ml-auto">
          <Button type="primary" onClick={() => setOpen(true)}>Add New</Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-[10px] p-[20px]">
        {
          data.map((row: any, i: any) =>
             


              <Dropdown key={i} menu={{
                items: [
                  { key: '1', label: "Update" },
                  { key: '2', label: "Delete" },
                ], onClick: ({ key }) => {
                  switch (key) {
                    case "1":
                      setOpen(true); setItem(row); setIsEdit(true);
                      break;
                    case "2":
                      modal.confirm({
                        title: 'Delete the task',
                        icon: <i className="fi fi-exclamation"></i>,
                        content: 'Are you sure to delete this?',
                        onOk() {
                          onDelete(row)
                        }
                      });
                      break;
                  }
                }
              }} placement="bottomRight" trigger={['click']} className={`
              ${row.type == 'basic' ? 'size-[30px] text-xs border border-gray-300 flex items-center justify-center hover:border-blue-500' : ''}
              ${row.type == 'blank' ? 'size-[30px] text-xs border border-transparent flex items-center justify-center hover:border-blue-500' : ''}
              ${row.type == 'break' ? 'w-full h-[10px] bg-gray-100 border border-transparent hover:border-blue-500' : ''}
              `}>
                <div className="flex flex-col">
                  <div>{row.number}</div>
                  <div className="text-xs text-gray-400 -mt-[5px]">{row.column}</div>
                </div>
              </Dropdown>
          
          )
        }
      </div>



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
              <Form.Item label="Row" name="row" initialValue="0" rules={[{ required: true }]} >
                <Input />
              </Form.Item>
         
            </Col>
              <Col span={12}>
     <Form.Item label="Column" name="column" initialValue="0" rules={[{ required: true }]} >
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
    </>
  )
}
export default Seats
