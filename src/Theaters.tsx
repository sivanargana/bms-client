import axios from "axios"
import { useEffect, useState } from "react"

 

function Theaters() {

  const [theaters, setTheaters] = useState<any>([])

  useEffect(() => {

    axios.get("http://localhost:2000/api/theaters").then(res => {
      setTheaters(res.data)
    })

  }, [])

  return (

    <>
      {
        theaters.map((item: any, i: any) => <div key={i}>
         
          <div>{item.name}</div>
          <div>{item.city}</div>
        </div>)
      }
    </>

  )
}

export default Theaters
