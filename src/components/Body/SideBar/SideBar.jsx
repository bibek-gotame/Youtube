import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  const navigate = useNavigate();

  return (
    <div className={menuOpen ? "w-[10rem] pl-4 pt-5  " : "hidden"}>
      <div>
        <p
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer  rounded-lg px-2 hover:bg-black hover:text-white"
        >
          Home
        </p>
        <p>Shorts</p>
        <p>Video</p>
        <p>Live</p>
      </div>
      <div>
        <h1 className="font-bold text-lg">Subscription</h1>
        <p>Music</p>
        <p>Gaming</p>
        <p>Sports</p>
        <p>Movies</p>
      </div>
      <div>
        <h1 className="font-bold text-lg">Watch Later</h1>
        <p>Music</p>
        <p>Gaming</p>
        <p>Sports</p>
        <p>Movies</p>
      </div>
    </div>
  );
}

export default SideBar;
