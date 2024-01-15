import { useEffect, useState } from 'react'
import {URL_product} from './Constant'
import RestuarantCard from './RestuarantCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import {useOnline} from '../utils/useOnline'

const Body = ()=>{
  const [data,setData] = useState('')
  useEffect(()=>{
    fetch(URL_product)
    .then((res) => res.json())
    .then((json) => setData(json?.products));
  },[])

    const online = useOnline();
    if(!online){
      return <h1 key="404" >😢No Internet Connection Detected</h1>
    }

    return data ===''?<Shimmer />:(
      <>
      <div className="container">
     {
      data.map((item) => {
       return <Link to={"/restaurant/"+item?.id}><RestuarantCard {...item} /></Link>
      })
      
     }                                                         
      </div>
      </>
    )
    }

    export default Body;