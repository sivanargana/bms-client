import { Breadcrumb, Button, Col, Drawer, Dropdown, Form, Input, Row, Table } from "antd"
import useModal from "antd/es/modal/useModal";
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
function Screens(props: any) {
  const [modal, contextHolder] = useModal();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState<any>([]);
  const [item, setItem] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    onRead()
  }, [])
  const onCreate = async () => {
      try {
      await form.validateFields();
      axios.post(`${import.meta.env.VITE_API_URL}screens`, setFormData()).then(res => {
      form.resetFields()
      onRead();
      setOpen(false);
    })
    } catch (errorInfo) {
      console.log('❌ Validation Failed:', errorInfo);
    }
 
  };
  const onUpdate = () => {
    axios.put(`${import.meta.env.VITE_API_URL}screens/${item.id}`, setFormData()).then(res => {
      form.resetFields()
      setOpen(false);
      onRead();
    })
  };
  const onRead = () => {
    axios.get(`${import.meta.env.VITE_API_URL}screens/${params.id}/bytheater`).then(res => {
      setData(res.data);
    })
  }
  const onDelete = (row: any) => {
    axios.delete(`${import.meta.env.VITE_API_URL}screens/${row.id}`).then(res => {
      setOpen(false);
      onRead();
    })
  }
  const setFormData = () => {
    let values = form.getFieldsValue(true);
    values.theaterId = params.id;
    return values;
  }
  return (
    <>
      {contextHolder}
      <div className="flex items-center gap-[20px] px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold">Screens</div>
        <Breadcrumb>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Theatres</Breadcrumb.Item>
          <Breadcrumb.Item>Screens</Breadcrumb.Item>
        </Breadcrumb>
        <div className="ml-auto">
          <Button type="primary" onClick={() => setOpen(true)}>Add New</Button>
        </div>
      </div> 
      <Table rowKey="id" dataSource={data} columns={[
    {
      title: 'Info',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      width: 150,
      render: (_: any, row: any) => <>
        <Dropdown menu={{
          items: [
            { key: '1', label: "Update" },
            { key: '2', label: "Delete" },
            { key: '3', label: "Manage Shows" },
            { key: '4', label: "Manage Seats" }
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
              case "3":
                navigate(`${row.id}/shows`)
                break;
              case "4":
                navigate(`${row.id}/seats`)
                break;
            }
            
          }
        }} placement="bottomRight" trigger={['click']}>
          <Button>Actions <i className="fi fi-rr-angle-small-down"></i></Button>
        </Dropdown>
      </> 
    },
  ]} />
      <Drawer
        title={isEdit ? 'Update Record' : 'Add Record'}
        onClose={() => { setOpen(false); setIsEdit(false); setItem({}) }}
        open={open} 
        afterOpenChange={(val) => {
          let { img, ...rest } = item;
          if (isEdit) {
            form.setFieldsValue(rest)
          } else {
            form.resetFields()
          }
        }}
        footer={<>{isEdit ? <Button type="primary" onClick={onUpdate}>Update</Button> : <Button type="primary" onClick={onCreate}>Create</Button>}</>}
      >
        <Form layout="vertical" form={form} requiredMark={false} >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Name | Number" name="name" rules={[{required:true}]} >
                <Input />
              </Form.Item></Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
export default Screens
