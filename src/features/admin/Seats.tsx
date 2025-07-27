import { Breadcrumb } from "antd"
import axios from "axios"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import SeatLayout2 from "../../components/SeatLayout2";
function Seats() {
  const params = useParams();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    onRead();
  }, [])
  const onRead = () => {
    axios.get(`${import.meta.env.VITE_API_URL}screens/${params.sid}/byscreen`).then(res => {
      setData(res.data);
    })
  }
  const onChange = () => {
    onRead();
  }
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
      </div>
      <div className="flex justify-center">
        <SeatLayout2 data={data} id={params.sid} onChange={onChange} />
      </div>
    </>
  )
}
export default Seats
