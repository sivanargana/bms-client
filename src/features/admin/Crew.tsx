import { Breadcrumb, Button, Col, Drawer, Dropdown, Form, Input, Row, Table, Upload } from "antd"
import useModal from "antd/es/modal/useModal";
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router";
function Crew(props: any) {
  const [modal, contextHolder] = useModal();
  const params = useParams()
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
      axios.post(`${import.meta.env.VITE_API_URL}crew`, setFormData()).then(res => {
        form.resetFields()
        onRead();
        setOpen(false);
      })
    } catch (errorInfo) {
      console.log('❌ Validation Failed:', errorInfo);
    }
  };
  const onUpdate = () => {
    axios.put(`${import.meta.env.VITE_API_URL}crew/${item.id}`, setFormData()).then(res => {
      form.resetFields()
      setOpen(false);
      onRead();
    })
  };
  const onRead = () => {
    axios.get(`${import.meta.env.VITE_API_URL}crew/bymovie/${params.id}`).then(res => {
      setData(res.data);
    })
  }
  const onDelete = (row: any) => {
    axios.delete(`${import.meta.env.VITE_API_URL}crew/${row.id}`).then(res => {
      setOpen(false);
      onRead();
    })
  }
  const setFormData = () => {
    const values = form.getFieldsValue(true);
    let formData: any = new FormData();
    formData.append('name', values.name);
    formData.append('role', values.role);
    formData.append('movieId', params.id);
    formData.append('img', values.img && values.img[0].originFileObj);
    return formData;
  }
  return (
    <>
      {contextHolder}
         <div className="flex items-center gap-[20px] px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold">Crew</div>
        <Breadcrumb>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Movies</Breadcrumb.Item>
          <Breadcrumb.Item>Crew</Breadcrumb.Item>
        </Breadcrumb>
        <div className="ml-auto">
          <Button type="primary" onClick={() => setOpen(true)}>Add New</Button>
        </div>
      </div> 
      <Table rowKey="id" dataSource={data} columns={[
        {
          title: 'Image',
          dataIndex: 'img',
          width: 120,
          render: (_: any, row: any) => <img className="size-[50px] rounded-full object-cover" src={`${import.meta.env.VITE_ASSETS_URL}${row.img}`} />
        },
        {
          title: 'Info',
          render: (_: any, row: any) => <>
            <div className="text-lg font-bold mb-[0px]">{row.name}</div>
            <div className="text-current/70">{row.role}</div>
          </>
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
              <Form.Item label="Name" name="name" rules={[{ required: true }]} >
                <Input />
              </Form.Item></Col>
            <Col span={24}>
              <Form.Item label="Role" name="role" rules={[{ required: true }]} >
                <Input />
              </Form.Item></Col>
            <Col span={24}>
              <Form.Item label="Image" name="img" rules={[{ required: true }]} valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
                <Upload showUploadList={false} beforeUpload={() => false}>
                  <Button icon={<i className="fi fi-rr-upload"></i>}>Upload</Button>
                </Upload>
              </Form.Item></Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
export default Crew
