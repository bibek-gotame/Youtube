import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../utils/store/appSlice";
import { useEffect, useState } from "react";
import { searchQueryAPI } from "../utils/constant";
import { addcacheSearch } from "../utils/store/searchSlice";
// import {useNavigate,Link} from 'react-router-dom'
function Header() {
  const dispatch = useDispatch();
  const cache = useSelector(store => store?.search?.cacheSearch)
  // const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setsearchSuggestion] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const getSearchSuggestion = async () => {
    const data = await fetch(searchQueryAPI + searchQuery);
    const json = await data.json();
    console.log('call');
    setsearchSuggestion(json[1]);
    dispatch(addcacheSearch({[searchQuery]:json[1]}))
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setsearchSuggestion(cache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col justify-between px-10 py-4   shadow-md">
      <div className="col-span-1 h-8 gap-2  flex ">
        <img
          onClick={() => dispatch(menuToggle())}
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="menu"
        />
        {/* <Link to='/'> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TdQa9xvFpj9ZPBKS2HlJauJZyVzqOuUI8ROCBMAX&s"
          alt="youtube icon"
          // onClick={()=> navigate('/')}
        />
        {/* </Link> */}
      </div>

      <div className="relative">
        <div className="search col-span-10   h-8   flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="rounded-l-full border-2  py-1 px-4 w-[30rem]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="rounded-r-full h-9 pl-3 pr-4  bg-slate-200 ">
            <img
              className="h-6 "
              src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
              alt="search"
            />
          </button>
        </div>
        {showSuggestion && (
          <div className="searchSuggestion absolute bg-gray-50 w-[30rem]  mt-1 rounded-lg shadow-md">
            {searchSuggestion &&
              searchSuggestion.map((s) => (
                <li key={s} className="px-4 py-1">
                  {s}
                </li>
              ))}
          </div>
        )}
      </div>

      <div className="col-span-1  ">
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
