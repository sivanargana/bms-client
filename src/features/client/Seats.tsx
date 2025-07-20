import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import SeatLayout from "../../components/SeatLayout"
function _Seats() {
  const params = useParams()
  const [seats, setSeats] = useState<any>([])
  useEffect(() => {
    console.log("hi")
    axios.get(`${import.meta.env.VITE_API_URL}screens/${params.sid}/byscreen`).then(res => {
      setSeats(res.data)
 
    })
  }, [])
  return (
    <>
        <div className="container py-[20px] flex justify-center">
             <SeatLayout data={seats} />
      </div>
    </>
  )
}
export default _Seats
