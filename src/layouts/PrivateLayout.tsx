import { NavLink, Outlet } from "react-router"

function PrivateLayout() {

  return ( 
    <>
     <div className="pl-[240px]">
  <div className="fixed left-0 top-0 bottom-0 w-[240px] bg-slate-900">
<ul>

  <li>
    <NavLink to="">Movies</NavLink>
  </li>
  <li>
    <NavLink to="theaters">Theaters</NavLink>
  </li>
 
</ul>
  </div>
<Outlet />
 </div>
    </>
  )
}

export default PrivateLayout
