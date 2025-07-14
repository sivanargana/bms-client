import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router"



function Movie() {
  const params = useParams()
  const [movie, setMovie] = useState<any>({})

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_URL}movies/${params.id}/overview`).then(res => {
      setMovie(res.data)
    })

  }, [])

  return (

    <>
      <div >
        <div className="relative bg-gray-900">

          <div className="container max-w-[1170px] mx-auto relative flex items-center py-[30px] gap-[20px]">
            <img src={`${import.meta.env.VITE_ASSETS_URL}${movie.poster}`} className="absolute left-0 top-0 w-full h-full z-[1] object-cover mask-b-from-0% mask-radial-[50%_80%] mask-radial-from-50% opacity-30" />
            <img src={`${import.meta.env.VITE_ASSETS_URL}${movie.thumbnail}`} className="flex-none aspect-[2/3] object-cover w-[250px] relative z-[2] rounded-lg" />
            <div className="flex-auto relative z-[2]">
              <h1 className="text-white text-5xl font-bold mb-[10px]"> {movie.name}</h1>
              <p className="text-white/50 mb-[20px]"> {movie.duration} | {movie.genre} | {movie.censor} | {movie.release}</p>
              <NavLink to={`shows`} className="h-[48px] bg-red-500 text-white rounded inline-flex items-center px-[20px]">Book Ticket</NavLink>
            </div>
          </div>
        </div>


        <div className="container max-w-[1170px] mx-auto py-[30px]">
          <h2 className="text-2xl font-bold mb-[10px]">About the movie</h2>
          <p> {movie.description}</p>
          {movie.cast?.length > 0 &&
            <>
              <div className="mb-[20px]"></div>

              <h2 className="text-2xl font-bold mb-[10px]">Cast</h2>
              <ul className="grid grid-cols-8 gap-[20px]">
                {
                  movie.cast.map((item: any, i: any) =>
                    <li key={i} className="text-center">
                      <img src={`${import.meta.env.VITE_ASSETS_URL}${item.img}`} className="size-[120px] mx-auto rounded-full object-cover" />
                      <div>{item.name}</div>
                      <div className="text-gray-500">{item.role}</div>
                    </li>
                  )}

              </ul>


            </>
          }
          {movie.crew?.length > 0 &&
            <>
              <div className="mb-[20px]"></div>

              <h2 className="text-2xl font-bold mb-[10px]">Crew</h2>
              <ul className="grid grid-cols-8 gap-[20px]">

                {
                  movie.crew.map((item: any, i: any) =>
                    <li key={i} className="text-center">
                      <img src={`${import.meta.env.VITE_ASSETS_URL}${item.img}`}  className="size-[120px] mx-auto rounded-full object-cover" />
                      <div>{item.name}</div>
                      <div className="text-gray-500">{item.role}</div>
                    </li>)}

              </ul>

            </>
          }
        </div>



      </div>
    </>

  )
}

export default Movie
