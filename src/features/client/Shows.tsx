import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
 


function Shows() {
  const params = useParams()
  const [shows, setShows] = useState<any>({})

  useEffect(() => {

   axios.get(`${import.meta.env.VITE_API_URL}shows/bymovie/${params.id}`).then(res => {
      setShows(res.data)
    })

  }, [])

  return (

    <>
 <div className="container py-[20px]">
<div className="flex flex-col gap-[10px]">
      {
    shows.length > 0 && shows.map((theater:any,i:any)=>
    <div key={i} className="bg-white border border-gray-200 rounded-lg p-[20px] flex flex-col gap-[10px]">
      <div>{theater.name} --  {theater.city}</div>
       <div className="flex gap-[10px]">
        {
    theater.shows.length && theater.shows.map((show:any,i:any)=><div className="flex items-center justify-center border border-gray-200 h-[40px] w-[100px] rounded" key={i}>
      {show.time} 
    </div>
    )}
       </div>
    </div>
    )}
</div>
 </div>
    </>

  )
}

export default Shows
