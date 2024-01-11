import { useState } from 'react';
import logo from '../../public/assets/logo.png';
import Search from './SearchComponent'
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  function checkAuth(auth){
    return auth?"Log Out":"Log In";
   }
  const [auth,setAuth] = useState(false);
    return (
      <div className="header"  key="1">
        <div className="logo"><img src={logo} alt="Logo"></img></div>
        <div className="nav">
        <ul className="list">
            <li> <Search /> </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"><img src=""></img>About</Link></li>
          <li onClick={()=>setAuth(!auth)}><Link to="/login"><img src=""></img>{checkAuth(auth)}</Link></li>
          <li><a><img src=""></img>Cart</a></li>
        </ul>
        </div>
      </div>
    );
  };

  export default HeaderComponent;