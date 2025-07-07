import { Menu } from "antd"
import { NavLink, Outlet } from "react-router"
function PrivateLayout() {
  const items: any = [
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
          <Menu items={items} theme="dark" />
        </div>
        <Outlet />
      </div>
    </>
  )
}
export default PrivateLayout
