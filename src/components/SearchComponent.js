import { useState } from "react";
import restaurantsList from "./Constant";

const Search = () => {
    const [searchText, setSearchText] = useState(""); // Moved useState inside the functional component
    const [restaurantsList,setRestuarantList] = useState("")
    return (
      <div className="search">
        <input
          type="search"
          id="input"
          placeholder="Search.."
          value={searchText} // Controlled input value
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
  
        <input type="submit" id="submit"
       />
      </div>
    );
  };
  

export default Search;