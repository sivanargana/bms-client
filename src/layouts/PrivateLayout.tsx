import { Menu } from "antd"
import { Link, NavLink, Outlet } from "react-router"
function PrivateLayout() {
  const items: any = [
    {
      label: <NavLink to="banners">Banners</NavLink>,
      key: 'banners',
    },
    {
      label: <NavLink to="movies">Movies</NavLink>,
      key: 'movies',
    },
    {
      label: <NavLink to="theaters">Theaters</NavLink>,
      key: 'theaters',
    },
  ];
  return (
    <>
      <div className="pl-[240px]">
        <div className="fixed left-0 top-0 bottom-0 w-[240px] bg-slate-900">
           <Link to="/" className="block p-[20px]"><img src="/logo-white.svg" /></Link>
           <div className="p-[0px]">
          <Menu items={items} theme="dark" />
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}
export default PrivateLayout
