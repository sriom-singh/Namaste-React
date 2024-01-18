import { useState } from "react";
import restaurantsList from "./Constant";

const Search = () => {
    const [searchText, setSearchText] = useState(""); // Moved useState inside the functional component
    const [restaurantsList,setRestuarantList] = useState("")
    return (
      <div className=" flex gap-1 align-middle justify-center p-7 bg-gradient-to-t from-gray-100 via-gray-100 to-white">
        <input
        className="border outline-0 border-slate-300 w-[300px] p-1 pl-2 rounded focus:border-orange-600"
          type="search"
          id="input"
          placeholder="Search here..'"
          value={searchText} // Controlled input value
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
  
        <button className=" bg-orange-500  w-[80px] p-1 text-sm text-white font-normal rounded hover:bg-black">Search</button>
      </div>
    );
  };
  

export default Search;