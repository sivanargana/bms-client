import { Breadcrumb, Button, Col, Drawer, Dropdown, Form, Input, Row, Select, Table } from "antd"
import useModal from "antd/es/modal/useModal";
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router";
function _Shows() {
  const [modal, contextHolder] = useModal();
  const params = useParams();
  const [data, setData] = useState<any>([]);
  const [movies, setMovies] = useState<any>([]);
  const [item, setItem] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    onRead();
    axios.get(`${import.meta.env.VITE_API_URL}movies`).then(res => {
      setMovies(res.data);
    })
  }, [])
  const onCreate = async () => {
    try {
      await form.validateFields();
      axios.post(`${import.meta.env.VITE_API_URL}shows`, setFormData()).then(() => {
        form.resetFields()
        onRead();
        setOpen(false);
      })
    } catch (errorInfo) {
      console.log('❌ Validation Failed:', errorInfo);
    }
  };
  const onUpdate = () => {
    axios.put(`${import.meta.env.VITE_API_URL}shows/${item.id}`, setFormData()).then(() => {
      form.resetFields()
      setOpen(false);
      onRead();
    })
  };
  const onRead = () => {
    axios.get(`${import.meta.env.VITE_API_URL}shows/${params.sid}/byscreen`).then(res => {
      setData(res.data);
    })
  }
  const onDelete = (row: any) => {
    axios.delete(`${import.meta.env.VITE_API_URL}shows/${row.id}`).then(() => {
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
        <div className="text-lg font-bold">Shows</div>
        <Breadcrumb>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Theatres</Breadcrumb.Item>
          <Breadcrumb.Item>Screens</Breadcrumb.Item>
          <Breadcrumb.Item>Shows</Breadcrumb.Item>
        </Breadcrumb>
        <div className="ml-auto">
          <Button type="primary" onClick={() => setOpen(true)}>Add New</Button>
        </div>
      </div> 
      <Table rowKey="id" dataSource={data} columns={[
        {
          title: 'Time',
          dataIndex: 'time',
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
        afterOpenChange={() => {
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
            <Col span={24}>
              <Form.Item label="Time" name="time" rules={[{ required: true }]} >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Movie" name="movieId" rules={[{ required: true }]} >
                <Select
                  style={{ width: '100%' }}
                  placeholder="Select"
                  fieldNames={{ label: "name", value: "id" }}
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
