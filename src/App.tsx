import   { BrowserRouter, Routes, Route } from "react-router"
import Home from "./features/client/Home"
import _Seats from "./features/client/Seats"
import PublicLayout from "./layouts/PublicLayout"
import Movies from "./features/admin/Movies"
import PrivateLayout from "./layouts/PrivateLayout"
import Theaters from "./features/admin/Theaters"
import Screens from "./features/admin/Screens"
import Movie from "./features/client/Movie"
import Shows from "./features/client/Shows"
import _Shows from "./features/admin/Shows"
import Notfound from "./Notfound"
import Seats from "./features/admin/Seats"
import Banners from "./features/admin/Banners"
import CastCrew from "./features/admin/CastCrew"


function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} /> 
               <Route path="movie/:slug" element={<Movie />} /> 
               <Route path="movie/:slug/shows" element={<Shows />} /> 
               <Route path="movie/:slug/shows/:sid/seats" element={<_Seats />} /> 
          </Route>
          <Route path="admin" element={<PrivateLayout />}>
          <Route path="banners" element={<Banners />} /> 
          <Route path="movies" element={<Movies />} /> 
          <Route path="movies/:id/cast-crew" element={<CastCrew />} />  
          <Route path="theaters" element={<Theaters />} /> 
          <Route path="theaters/:id/screens" element={<Screens />} /> 
          <Route path="theaters/:id/screens/:sid/seats" element={<Seats />} /> 
          <Route path="theaters/:id/screens/:sid/shows" element={<_Shows />} /> 
          </Route>
                <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
