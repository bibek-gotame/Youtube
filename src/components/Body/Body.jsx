import { Outlet } from "react-router-dom"
import SideBar from "./SideBar/SideBar"

function Body() {
  return (
    <div className="flex gap-4">
     <SideBar/>
     <Outlet/>
    </div>
  )
}

export default Body