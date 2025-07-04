import { DeleteOutlined, EditOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Popconfirm, Row, Space, Table, Upload } from "antd"
const { TextArea } = Input;
import axios from "axios"
import { useEffect, useState } from "react"
function Movies() {
  const [movies, setMovies] = useState<any>([]);
  const [item, setItem] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  const columns = [
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      width: 120,
      render: (_: any, row: any) => <img className="size-[50px]" src={`http://localhost:2000/uploads/${row.thumbnail}`} />
    },
    {
      title: 'Poster',
      dataIndex: 'poster',
      width: 120,
      render: (_: any, row: any) => <img className="size-[50px]" src={`http://localhost:2000/uploads/${row.poster}`} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
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
    onRead()
  }, [])
  const onCreate = () => {

    axios.post("http://localhost:2000/api/movies", setFormData()).then(res => {
      form.resetFields()
      onRead();
      setOpen(false);
    })
  };
  const onUpdate = () => {

    axios.put(`http://localhost:2000/api/movies/${item.id}`, setFormData()).then(res => {
      form.resetFields()
      setOpen(false);
      onRead();
    })
  };
  const onRead = () => {
    axios.get("http://localhost:2000/api/movies").then(res => {
      setMovies(res.data);
    })
  }
  const onDelete = (row: any) => {
    axios.delete(`http://localhost:2000/api/movies/${row.id}`).then(res => {
      setOpen(false);
      onRead();
    })
  }
  const setFormData = () => {
    const values = form.getFieldsValue(true);
    let formData: any = new FormData();
    formData.append('name', values.name);
    formData.append('duration', values.duration);
    formData.append('genre', values.genre);
    formData.append('censor', values.censor);
    formData.append('release', values.release);
    formData.append('description', values.description);
    formData.append('thumbnail', values.thumbnail && values.thumbnail[0].originFileObj);
    formData.append('poster', values.poster && values.poster[0].originFileObj);

    return formData;
  }
  return (
    <>
      <div className="flex items-center px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold flex-auto">Movies</div>
        <Button type="primary" onClick={() => setOpen(true)}>Add New</Button>
      </div>
      <Table rowKey="id" dataSource={movies} columns={columns} />
      <Drawer
        title={isEdit ? 'Update Record' : 'Add Record'}
        onClose={() => { setOpen(false); setIsEdit(false); setItem({}) }}
        open={open}
        width={600}
        afterOpenChange={(val) => {
          let { thumbnail, poster, ...rest } = item;
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
            <Col span={12}>
              <Form.Item label="Duration" name="duration" >
                <Input />
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Genre" name="genre" >
                <Input />
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Censor" name="censor" >
                <Input />
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Release" name="release" >
                <Input />
              </Form.Item></Col>
            <Col span={24}>
              <Form.Item label="Description" name="description" >
                <TextArea rows={4} />
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Thumbnail" name="thumbnail" valuePropName="fileList" getValueFromEvent={(e) => e?.fileList} >
                <Upload showUploadList={false} beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Poster" name="poster" valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
                <Upload showUploadList={false} beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item></Col>
            <Col span={12}></Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}
export default Movies
