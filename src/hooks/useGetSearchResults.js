import { useDispatch, useSelector } from "react-redux";
import { searchDataAPI } from "../utils/constant";
import { addYoutubeVideos } from "../utils/store/appSlice";
import { useEffect } from "react";

function useGetSearchResults() {
    const searchQuery = useSelector(store => store.search.searchQuery)
    const dispatch = useDispatch();
    
    const getSearchResults = async () => {
        const data = await fetch(searchDataAPI + searchQuery);
        const json = await data.json();
        const videos = await json.items;
        dispatch(addYoutubeVideos(videos));
    };

    useEffect(() => {
        searchQuery && getSearchResults()
    }, [searchQuery])

}

export default useGetSearchResults