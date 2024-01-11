import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { URL_product } from "./Constant";
import Shimmer from "./Shimmer";


 const RestaurantMenu = () => {
    // How to read a dyanamic URL params.
    const {resId} = useParams();
    const [detailData , setDetailData] = useState("");

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        const data = await fetch(`https://dummyjson.com/products/${resId}`);
        const json = await data.json();
        console.log(json)
        setDetailData(json);
    }
    console.log(detailData)
  return detailData===""?<Shimmer />:(
    <div key='122'>
        <h1>RestaurantMenu {resId}</h1> 
        <img src={detailData?.images[0]}></img>
        <h2>{detailData?.title}</h2>
        <h6>{detailData?.category}</h6>
        <h2>${detailData?.price}</h2>
    </div>
  )

}
export default RestaurantMenu;