import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Table } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"

 

function Movies() {

  const [movies, setMovies] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const columns = [
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',

    render:(_:any,row:any)=><img className="size-[50px]" src={`http://localhost:2000/uploads/${row.thumbnail}`} />
  },
  {
    title: 'Name',
    dataIndex: 'name',

  },
  {
    title: 'Actions',
    dataIndex: 'actions',

    render:(_:any,row:any)=><>
      <Button shape="circle" icon={<DeleteOutlined />} />
      <Button shape="circle" icon={<EditOutlined />} />
    </>
  },
  
];

  useEffect(() => {

    axios.get("http://localhost:2000/api/movies").then(res => {
      setMovies(res.data)
    })

  }, [])

  return (

    <>

    <Button type="primary" onClick={()=>setOpen(true)}>Add New</Button>
    <Table rowKey="id" dataSource={movies} columns={columns} />

       <Drawer
        title="Add New" 
        onClose={()=>setOpen(false)}
        open={open}
      >
  <Form layout="vertical">
    <Form.Item label="Name">
      <Input />
    </Form.Item>

   
  </Form>
      </Drawer>
  
    </>

  )
}

export default Movies
