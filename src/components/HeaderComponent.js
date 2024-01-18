import { useLayoutEffect, useRef, useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import {useOnline} from '../utils/useOnline';
import gsap from "gsap";


const HeaderComponent = () => {
  
  const comp = useRef(null);
  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.from("#box>li",{
        yPercent:-80,
        duration:0.5,
        delay:0.3,
        opacity:0,
        stagger:0.2,
      })
    },comp)

    return ()=> ctx.revert();
  },[])

  function checkAuth(auth){
    return auth?"Log Out":"Log In";
   }
   const Check = useOnline()
  const [auth,setAuth] = useState(false);
    return (
      <div ref={comp} className="flex justify-between items-center h-20 shadow-md shadow-gray-300 z-50 "  key="1">
        <div className="w-4/12 p-2 pl-8 "><img className='w-44' src={logo} alt="Logo"></img></div>
        <div className="w-9/12 pr-4">
        <ul id='box' className="flex w-full justify-end font-medium">
         
          <li className='p-4 hover:text-orange-400'><Link to="/">Home</Link></li>
          <li className='p-4 hover:text-orange-400'><Link to="/instaDelivery">InstaDelivery</Link></li>
          <li className='p-4 hover:text-orange-400'><Link to="/about"><img src=""></img>About</Link></li>
          <li className='p-4 hover:text-orange-400' onClick={()=>setAuth(!auth)}><Link to="/login"><img src=""></img>{checkAuth(auth)}</Link></li>
          <li className='p-4 hover:text-orange-400'><a><img src=""></img>Cart</a></li>
          <li className='p-4 hover:text-orange-400'>Status {Check?"🟢":"🔴"}</li>

        </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;