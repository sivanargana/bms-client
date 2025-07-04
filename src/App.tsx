import   { BrowserRouter, Routes, Route } from "react-router"
import Home from "./Home"
import PublicLayout from "./layouts/PublicLayout"
import Movies from "./Movies"
import PrivateLayout from "./layouts/PrivateLayout"
import Theaters from "./Theaters"


function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} /> 
          </Route>
          <Route path="admin" element={<PrivateLayout />}>
          <Route index element={<Movies />} /> 
          <Route path="theaters" element={<Theaters />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
