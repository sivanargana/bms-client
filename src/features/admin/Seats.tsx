import { Breadcrumb, Button } from "antd"
import SeatsLayout from "./SeatsLayout"
import SeatsLayoutBuilder from "./SeatsLayoutBuilder"

function Seats(props: any) {

  return (
    <>
     <div className="flex items-center gap-[20px] px-[20px] py-[10px] bg-white shadow relative z-[4]">
        <div className="text-lg font-bold">Seats</div>
        <Breadcrumb>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Theatres</Breadcrumb.Item>
          <Breadcrumb.Item>Screens</Breadcrumb.Item>
          <Breadcrumb.Item>Seats</Breadcrumb.Item>
        </Breadcrumb>
        <div className="ml-auto">
          <Button type="primary">Add New</Button>
        </div>
      </div> 
      <SeatsLayoutBuilder />
    </>
  )
}
export default Seats
