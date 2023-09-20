import React, { useEffect, useState } from "react";
import logo from "../asset/ytlogo.png";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResult({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    console.log(searchQuery);

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="grid grid-flow-col px-5 py-2.5 shadow-lg h-14">
      <div className="flex col-span-1">
        <AiOutlineMenu
          className="h-8 cursor-pointer"
          onClick={() => toggleSidebarHandler()}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="youtube-logo" src={logo} />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 h-[36px] border border-gray-200 p-2 px-5 focus:border-blue-200 rounded-l-full"
            placeholder=" Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-200 py-2 px-5 h-[36px] rounded-r-full bg-gray-100">
            <AiOutlineSearch className="" />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="flex py-2 shadow-sm hover:bg-gray-100">
                  <AiOutlineSearch /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;

/* debounce


{  make an api call after every key press 
  but if the difference between 2 api calls is <200ms
  decline the api call
}

key press i
render the component
useeffect();
start timer => make an api call after 200ms

key press -ip
destroy the component (useeffect return method)
render the component;
useeffect();
start the timer +> make an  api call after 200ms


settimeout(200)=> make an api call


*/
