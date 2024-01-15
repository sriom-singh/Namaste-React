import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { URL_product } from "./Constant";
import Shimmer from "./Shimmer";
import useProducts from "../utils/useProducts";

 const RestaurantMenu = () => {
    // How to read a dyanamic URL using params.
    const {resId} = useParams();
    

    const detailData = useProducts(resId)

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