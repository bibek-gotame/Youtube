import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchDataAPI, searchQueryAPI } from "../../utils/constant";
import { addSearchQuery, addcacheSearch } from "../../utils/store/searchSlice";
import { addYoutubeVideos } from "../../utils/store/appSlice";
import useGetSearchResults from "../../hooks/useGetSearchResults";

function Search() {
  useGetSearchResults()
  const dispatch = useDispatch();
  const cache = useSelector((store) => store?.search?.cacheSearch);
  const [searchQuerySuggestion, setsearchQuerySuggestion] = useState("");
  const [searchSuggestion, setsearchSuggestion] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  
  const getSearchSuggestion = async () => {
    const data = await fetch(searchQueryAPI + searchQuerySuggestion);
    const json = await data.json();
    setsearchSuggestion(json[1]);
    dispatch(addcacheSearch({ [searchQuerySuggestion]: json[1] }));
  };

 
  //* Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuerySuggestion]) {
        setsearchSuggestion(cache[searchQuerySuggestion]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuerySuggestion]);

  return (
    <div>
      <div className="search  col-span-10   h-8   flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-full border-2 focus:outline-none py-1 px-4 md:w-[25rem] lg:w-[30rem]"
          value={searchQuerySuggestion}
          onChange={(e) => setsearchQuerySuggestion(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          // onBlur={() => setShowSuggestion(false)}
        />
        <button className="rounded-r-full h-9 pl-3 pr-4  bg-slate-200 ">
          <img
            className="h-6 "
            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
            alt="search"
            onClick={()=>{
              dispatch(addSearchQuery(searchQuerySuggestion))
            }}
          />
        </button>
      </div>
      {showSuggestion  && (
        <div className="searchSuggestion absolute bg-gray-50 w-[30rem]  mt-1 rounded-lg shadow-md">
          <div className=" flex justify-end ">
            <p
              onClick={() => setShowSuggestion(false)}
              className="w-fit cursor-pointer px-3 font-semibold text-white bg-black py-0.5  border rounded-xl"
            >
              close
            </p>
          </div>
          {searchSuggestion &&
            searchSuggestion.map((s) => (
              <p
                onClick={() => {
                  setsearchQuerySuggestion(s);
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
