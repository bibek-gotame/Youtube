import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Header from "../Header/Header";

function Body() {
  return (
    <>
      <Header />
      <div className="flex gap-4">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default Body;
