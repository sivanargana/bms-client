import { Button } from "antd"
import { Link, Outlet } from "react-router"

function PublicLayout() {

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="shadow sticky top-0 z-[999]">
          <div className="h-[64px] bg-white flex flex-col justify-center px-[20px]">
          <div className="container">
            <div className="flex items-center gap-[16px]">
              <Link to="/"><img src="/logo.svg" /></Link>
              <div className="flex items-center h-[36px] border border-gray-200 pr-[20px] w-[550px] rounded-md">
                <i className="fi fi-rr-search size-[36px] flex items-center justify-center text-[16px] text-gray-500"></i>
                <div className="text-[14px] text-gray-400">Search for Movies, Events, Plays, Sports and Activities</div>
              </div>
              <div className="ml-auto flex gap-[10px]">
                <Button type="text">Hyderabad <i className="fi fi-rr-angle-small-down"></i></Button>
                <Button type="primary">Sign In</Button>
                 <Button type="text" shape="circle" icon={<i className="fi fi-rr-menu-burger"></i>} />
              </div>
            </div>


          </div>
        </div>
        <div className="h-[40px] bg-gray-100"></div>
        </div>
        <Outlet />

      </div>
    </>
  )
}

export default PublicLayout
