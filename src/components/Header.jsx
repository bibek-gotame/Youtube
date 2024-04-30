import { useDispatch } from "react-redux";
import { menuToggle } from "../utils/store/appSlice";

function Header() {
  const dispatch = useDispatch()
  return (
    <div className="grid grid-flow-col px-2 py-4   shadow-md">
      <div className="col-span-1 h-8 gap-2  flex ">
        <img
        onClick={()=> dispatch(menuToggle())}
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="menu"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TdQa9xvFpj9ZPBKS2HlJauJZyVzqOuUI8ROCBMAX&s"
          alt="youtube icon"
        />
      </div>
      <div className="seach col-span-10  h-8  justify-center flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-full border-2 w-1/2 py-1 px-2"
        />
        <button className="rounded-r-full h-9 pl-3 pr-4  bg-slate-200 ">
          <img
            className="h-6 "
            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
            alt="search"
          />
        </button>
      </div>
      <div className="col-span-1  ">
        <img
          className="h-8 mx-auto"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Header;
