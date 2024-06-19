import { useDispatch } from "react-redux";
import { menuToggle } from "../../utils/store/appSlice";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="grid grid-flow-col justify-between px-4 sm:px-10 py-4   shadow-md">
      <div className="sm:col-span-1 h-8 gap-2 flex ">
        <img
          onClick={() => dispatch(menuToggle())}
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="menu"
          className="hidden md:inline-block"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TdQa9xvFpj9ZPBKS2HlJauJZyVzqOuUI8ROCBMAX&s"
          alt="youtube icon"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="relative hidden sm:inline-block">
        <Search />
      </div>
      
      <div className="sm:col-span-1 flex gap-6 items-center">
        <img
          className="h-6 sm:hidden"
          src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          alt="search"
        />
        <img
          className="h-8 "
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Header;
