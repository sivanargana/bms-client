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
      <div className="flex flex-wrap p-[20px]">
        {
          seats.length > 0 && seats.map((column: any, i: any) =>
            <React.Fragment key={i}>
              {(() => {
                switch (column.type) {
                  case "space":
                    return <div className="size-[25px] rounded flex items-center justify-center border border-transparent hover:border-blue-500"></div>;
                  case "basic":
                    return <div className="size-[25px] rounded flex items-center justify-center border border-gray-300 text-xs bg-gray-200">{column.number}</div>;
                }
              })()}
              {column.column % 30 !== 0 && <div className="w-[5px]"></div>}
              {column.column % 30 === 0 && <div className="h-[5px] w-full"></div>}
            </React.Fragment>)
        }
      </div>
    </>
  )
}
export default _Seats
