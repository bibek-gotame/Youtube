import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDataAPI, searchQueryAPI } from "../../utils/constant";
import { addcacheSearch } from "../../utils/store/searchSlice";
import { addYoutubeVideos } from "../../utils/store/appSlice";

function Search() {
  const dispatch = useDispatch();
  const cache = useSelector((store) => store?.search?.cacheSearch);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setsearchSuggestion] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const getSearchSuggestion = async () => {
    const data = await fetch(searchQueryAPI + searchQuery);
    const json = await data.json();
    setsearchSuggestion(json[1]);
    dispatch(addcacheSearch({ [searchQuery]: json[1] }));
  };

  const getSearchResults = async () => {
    const data = await fetch(searchDataAPI + searchQuery
    );
    const json = await data.json()
    console.log(json);
    const videos = await json.items;
    // console.log(json);
    dispatch(addYoutubeVideos(videos));  };
  //* Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log(searchQuery);
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
    <div>
      <div className="search col-span-10   h-8   flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-full border-2 focus:outline-none py-1 px-4 w-[30rem]"
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
            onClick={getSearchResults}
          />
        </button>
      </div>
      {showSuggestion && (
        <div className="searchSuggestion absolute bg-gray-50 w-[30rem]  mt-1 rounded-lg shadow-md">
          {searchSuggestion &&
            searchSuggestion.map((s) => (
              <p
                onClick={() => {
                  setSearchQuery(s);
                  setShowSuggestion(false);
                }}
                key={s}
                className="px-4 py-1 cursor-pointer"
              >
                {s}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}

export default Search;
