import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router"



function Home() {

  const [movies, setMovies] = useState<any>([])

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_URL}movies`).then(res => {
      setMovies(res.data)
    })

  }, [])

  return (

    <>
     <div className="grid grid-cols-4 gap-[20p]">
       {
        movies.map((item: any, i: any) => <NavLink to={`movie/${item.id}`} key={i} >
          <img src={`${import.meta.env.VITE_ASSETS_URL}${item.thumbnail}`} />
          <div>{item.name}</div>
        </NavLink>)
      }
     </div>
    </>

  )
}

export default Home
