import { DeleteOutlined, EditOutlined, FundProjectionScreenOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Popconfirm, Row, Space, Table } from "antd"
 
import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router";
function Theaters(props:any) {
  const [data, setData] = useState<any>([]);
  const [item, setItem] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
 
  const columns = [
  
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'City',
      dataIndex: 'city',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
       width: 150,
      render: (_: any, row: any) => <>
        <Space>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this?"
            onConfirm={() => onDelete(row)}
            okText="Yes"
            cancelText="No"
          >
            <Button shape="circle" icon={<DeleteOutlined />} />
          </Popconfirm>
          <Button shape="circle" icon={<EditOutlined />} onClick={() => { setOpen(true); setItem(row); setIsEdit(true) }} />
                <NavLink to={`${row.id}/screens`}><Button shape="circle" icon={<FundProjectionScreenOutlined />} /></NavLink>
        </Space>
      </>
    },
  ];
  useEffect(() => {
    onRead()
  }, [])
  const onCreate = () => {

    axios.post("http://localhost:2000/api/theaters", setFormData()).then(res => {
      form.resetFields()
      onRead();
      setOpen(false);
    })
  };
  const onUpdate = () => {

    axios.put(`http://localhost:2000/api/theaters/${item.id}`, setFormData()).then(res => {
      form.resetFields()
      setOpen(false);
      onRead();
    })
  };
  const onRead = () => {
    axios.get(`http://localhost:2000/api/theaters`).then(res => {
      setData(res.data);
    })
  }
  const onDelete = (row: any) => {
    axios.delete(`http://localhost:2000/api/theaters/${row.id}`).then(res => {
      setOpen(false);
      onRead();
    })
  }
  const setFormData = () => {
    const values = form.getFieldsValue(true);
    return values;
  }
  return (
    <>
      <div className="flex items-center px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold flex-auto">Theatres</div>
        <Button type="primary" onClick={() => setOpen(true)}>Add New</Button>
      </div>
      <Table rowKey="id" bordered dataSource={data} columns={columns} />
      <Drawer
        title={isEdit ? 'Update Record' : 'Add Record'}
        onClose={() => { setOpen(false); setIsEdit(false); setItem({}) }}
        open={open}
        width={600}
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
        <Form layout="vertical" form={form} >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Name" name="name" >
                <Input />
              </Form.Item></Col>
            <Col span={24}>
              <Form.Item label="City" name="city" >
                <Input />
              </Form.Item>
              </Col>
           
        
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
export default Theaters
