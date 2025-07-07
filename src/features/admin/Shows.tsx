import { BorderInnerOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Popconfirm, Row, Select, Space, Table } from "antd"
 
import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router";
function _Shows(props:any) {
  const params = useParams();
  const [data, setData] = useState<any>([]);
  const [movies, setMovies] = useState<any>([]);
  const [item, setItem] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
 
  const columns = [
  
    {
      title: 'Time',
      dataIndex: 'time',
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
     
        </Space>
      </>
    },
  ];
  useEffect(() => {
    onRead();
      axios.get(`${import.meta.env.VITE_API_URL}movies`).then(res => {
      setMovies(res.data);
    })
  }, [])
  const onCreate = () => {

    axios.post(`${import.meta.env.VITE_API_URL}shows`, setFormData()).then(res => {
      form.resetFields()
      onRead();
      setOpen(false);

    })
  };
  const onUpdate = () => {

    axios.put(`${import.meta.env.VITE_API_URL}shows/${item.id}`, setFormData()).then(res => {
      form.resetFields()
      setOpen(false);
      onRead();
    })
  };
  const onRead = () => {
    axios.get(`${import.meta.env.VITE_API_URL}shows/byscreen/${params.id}`).then(res => {
      setData(res.data);
    })
  }
  const onDelete = (row: any) => {
    axios.delete(`${import.meta.env.VITE_API_URL}shows/${row.id}`).then(res => {
      setOpen(false);
      onRead();
    })
  }
  const setFormData = () => {
    let values = form.getFieldsValue(true);
    values.screenId = params.id;
    return values;
  }
  return (
    <>
      <div className="flex items-center px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold flex-auto">Shows</div>
        <Button type="primary" onClick={() => setOpen(true)}>Add New</Button>
      </div>
      <Table rowKey="id" bordered dataSource={data} columns={columns} />
      <Drawer
        title={isEdit ? 'Update Record' : 'Add Record'}
        onClose={() => { setOpen(false); setIsEdit(false); setItem({}) }}
        open={open}
        width={600}
        afterOpenChange={(val) => {
       
          if (isEdit) {
            form.setFieldsValue(item)
          } else {
            form.resetFields()
          }

        }}
        footer={<>{isEdit ? <Button type="primary" onClick={onUpdate}>Update</Button> : <Button type="primary" onClick={onCreate}>Create</Button>}</>}
      >
        <Form layout="vertical" form={form} >
          <Row gutter={16}>
            <Col span={24}> 
              <Form.Item label="Time" name="time" >
                <Input />
              </Form.Item>
              </Col>
            <Col span={24}> 
              <Form.Item label="Movie" name="movieId" >
                 <Select 

      style={{ width: '100%' }}
      placeholder="Select" 
      fieldNames={{label:"name",value:"id"}} 
      options={movies}
    />
              </Form.Item>
              </Col>
       
           
        
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
export default _Shows
