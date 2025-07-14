import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
function _Seats() {
  const params = useParams()
  const [seats, setSeats] = useState<any>({})
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}seats/byscreen/${params.sid}`).then(res => {
      setSeats(res.data)
      console.log(res)
    })
  }, [])
  return (
    <>
            <div className="container max-w-[1170px] mx-auto py-[30px]">
      <div className="flex flex-wrap gap-x-[10px]">
        {
          seats.length > 0 && seats.map((row: any, i: any) =>
             <div key={i} className={
             `${row.type == 'basic' ? 'size-[30px] text-xs border border-gray-300 flex items-center justify-center hover:border-blue-500' : ''}
              ${row.type == 'blank' ? 'size-[30px] text-xs border border-transparent flex items-center justify-center hover:border-blue-500' : ''}
              ${row.type == 'break' ? 'w-full h-[10px] bg-gray-100 border border-transparent hover:border-blue-500' : ''}`
                         
                        }>{row.number}</div>)
        }
      </div>
      </div>
    </>
  )
}
export default _Seats
