import { useEffect, useState } from "react";
import { URL_product } from "./Constant";
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import { ProductList } from "../utils/helper";
import Search from "./SearchComponent";
import Hero from "./Hero";

const Body = () => {
  const [data, setData] = useState("");
  const Getdata = ProductList();
  useEffect(() => {
    setData(Getdata);
  }, [Getdata]);

  const online = useOnline();
  if (!online) {
    return <h1 key="404">😢No Internet Connection Detected</h1>;
  }

  return data === "" ? (
   <> <Search />
    <Hero />
    <Shimmer />
    </>
  ) : (
    <div className="bg-gradient-to-t from-gray-100 via-orange-400 to-gray-100">
              <Search />
                <Hero />
      <div className="pb-10 flex flex-wrap align-middle justify-center gap-4 bg-gradient-to-t from-gray-100 via-orange-400 to-gray-100">
               
        {data.map((item) => {
          return (
            
            <Link to={"/restaurant/" + item?.id}>
              <RestuarantCard {...item} />
            </Link>
          );
        })}
      </div>
      </div>
  );
};

export default Body;
