
import { Button, Col, DatePicker, Drawer, Dropdown, Form, Input, Row, Select, Table, TimePicker, Upload, } from "antd"
import useModal from "antd/es/modal/useModal";
const { TextArea } = Input;
 
import axios from "axios" 
import dayjs from "dayjs";

import { useEffect, useState } from "react"
import { NavLink } from "react-router";
import global from "../../global";
function Movies() {
      const [modal, contextHolder] = useModal();
  const [movies, setMovies] = useState<any>([]);
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
   axios.post("http://localhost:2000/api/movies", setFormData()).then(res => {
      form.resetFields()
      onRead();
      setOpen(false);
    })
    } catch (errorInfo) {
      console.log('❌ Validation Failed:', errorInfo);
    }
 
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
    formData.append('duration', values.duration.format('HH:mm'));
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
     {contextHolder}
      <div className="flex items-center px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold flex-auto">Movies</div>
        <Button type="primary" onClick={() => setOpen(true)}>Add New</Button>
      </div>
      <Table rowKey="id" dataSource={movies} columns={[
        {
          title: 'Images',
          width: 300,
          render: (_: any, row: any) =>
            <div className="flex gap-px">
              <img className="aspect-[2/3] w-[50px] h-fit" src={`http://localhost:2000/uploads/${row.thumbnail}`} />
              <img className="aspect-[2/1] w-fit h-[75px]" src={`http://localhost:2000/uploads/${row.poster}`} />
            </div>
        },

        {
          title: 'Info',
          render: (_: any, row: any) => <>
            <div className="text-lg font-bold mb-[5px]">{row.name}</div>
            <div className="text-current/70">{row.duration} &bull; {row.genre} &bull; {row.censor} &bull; {row.release}</div>
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
                { key: '3', label: <NavLink to={`${row.id}/cast`}>Manage Cast</NavLink> },
                { key: '4', label: <NavLink to={`${row.id}/crew`}>Manage Crew</NavLink> },

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
                      },
                      onCancel() {

                      },
                    });

                    break;


                }
                console.log(key)

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
        width={600}
        afterOpenChange={(val) => {
          let { thumbnail, poster, duration, ...rest } = item;
          rest.duration = dayjs(duration, 'HH:mm')
          if (isEdit) {
            form.setFieldsValue(rest)
          } else {
            form.resetFields()
          }

        }}
        footer={<>{isEdit ? <Button type="primary" onClick={onUpdate}>Update</Button> : <Button type="primary" onClick={onCreate}>Create</Button>}</>}
      >
        <Form layout="vertical" form={form} requiredMark={false}  >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Name" name="name" rules={[{required:true}]} >
                <Input />
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Duration" name="duration" rules={[{required:true}]}  >
                 <TimePicker format="HH:mm" className="w-full" />
            
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Genre" name="genre" rules={[{required:true}]} >
                <Select options={global.genre} mode="tags" maxTagCount="responsive" />
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Censor" name="censor" rules={[{required:true}]} >
                <Select options={global.certificate} /> 
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Release" name="release" rules={[{required:true}]} >
                <DatePicker className="w-full" />
              </Form.Item></Col>
            <Col span={24}>
              <Form.Item label="Description" name="description" rules={[{required:true}]} >
                <TextArea rows={4} />
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Thumbnail" name="thumbnail" rules={[{required:true}]} valuePropName="fileList" getValueFromEvent={(e) => e?.fileList} >
                <Upload showUploadList={false} beforeUpload={() => false}>
                  <Button icon={<i className="fi fi-rr-upload"></i>}>Upload</Button>
                </Upload>
              </Form.Item></Col>
            <Col span={12}>
              <Form.Item label="Poster" name="poster" rules={[{required:true}]} valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
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
export default Movies
