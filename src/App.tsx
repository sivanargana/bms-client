import   { BrowserRouter, Routes, Route } from "react-router"
import Home from "./features/client/Home"
import PublicLayout from "./layouts/PublicLayout"
import Movies from "./features/admin/Movies"
import PrivateLayout from "./layouts/PrivateLayout"
import Theaters from "./features/admin/Theaters"
import Cast from "./features/admin/Cast"
import Crew from "./features/admin/Crew"
import Screens from "./features/admin/Screens"
import Seats from "./features/admin/Seats"
import Movie from "./features/client/Movie"
import Shows from "./features/client/Shows"
import _Shows from "./features/admin/Shows"


function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} /> 
               <Route path="movie/:id" element={<Movie />} /> 
               <Route path="movie/:id/shows" element={<Shows />} /> 
          </Route>
          <Route path="admin" element={<PrivateLayout />}>
          <Route path="movies" element={<Movies />} /> 
          <Route path="movies/:id/cast" element={<Cast />} /> 
          <Route path="movies/:id/crew" element={<Crew />} /> 
          <Route path="theaters" element={<Theaters />} /> 
          <Route path="theaters/:id/screens" element={<Screens />} /> 
          <Route path="theaters/:id/screens/:sid/seats" element={<Seats />} /> 
          <Route path="theaters/:id/screens/:sid/shows" element={<_Shows />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
