import { Breadcrumb, Button } from "antd" 
import SeatsLayoutBuilder from "./SeatsLayoutBuilder"
import axios from "axios"
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Seats(props: any) {
    const params = useParams();
      const [seats, setSeats] = useState<any>({})
  const addLayout = (values:any) => {
    axios.post(`${import.meta.env.VITE_API_URL}seats/layout`, { screenId: params.sid, layout: values }).then(res => {
      console.log(res)
    })
  }
  useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}seats/byscreen/${params.sid}`).then(res => {
      setSeats(res.data)
 
    })
  },[])
  return (
    <>
     <div className="flex items-center gap-[20px] px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold">Seats</div>
        <Breadcrumb>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Theatres</Breadcrumb.Item>
          <Breadcrumb.Item>Screens</Breadcrumb.Item>
          <Breadcrumb.Item>Seats</Breadcrumb.Item>
        </Breadcrumb>
        <div className="ml-auto">
          <Button type="primary">Add New</Button>
        </div>
      </div> 
      {seats.length > 0 && <SeatsLayoutBuilder seats={seats} onSave={(values:any)=>addLayout(values)} />}
    </>
  )
}
export default Seats
