import axios from "axios"
import { useEffect, useState } from "react"



function Home() {

  const [movies, setMovies] = useState<any>([])

  useEffect(() => {

    axios.get("http://localhost:2000/api/movies").then(res => {
      setMovies(res.data)
    })

  }, [])

  return (

    <>
      {
        movies.map((item: any, i: any) => <div key={i}>
          <img src={`http://localhost:2000/uploads/${item.thumbnail}`} />
          <div>{item.name}</div>
        </div>)
      }
    </>

  )
}

export default Home
