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
 <div className="container">
    {
    shows.length && shows.map((theater:any,i:any)=>
    <div key={i}>
      <div>{theater.name} --  {theater.city}</div>
       {
    theater.shows.length && theater.shows.map((show:any,i:any)=><div key={i}>
      <div>{show.time}</div>
    </div>
    )
   }
    </div>
    )
   }
 </div>
    </>

  )
}

export default Shows
