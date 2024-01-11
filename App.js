import React from "react";
import { createBrowserRouter,createRoutesFromElements,Outlet,Route,RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./src/components/HeaderComponent";
import Body from "./src/components/Body";
import Error from "./Error";
import About from "./src/components/About";
import Footer from "./src/components/Footer";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";


// Nested Heading Using createElement
// const Heading1 = React.createElement("div", { className: "tile", key: "1" }, [
//   React.createElement("h1", {}, "Heading1"),
//   React.createElement("h2", {}, "Heading2"),
//   React.createElement("h3", {}, "Heading3"),
// ]);

//Nested heading using JSX.
// const Heading2 = (
//     <div className="title">
//         <h1>Heading1</h1>
//         <h2>Heading2</h2>
//         <h3>Heading3</h3>

//     </div>
// )

//Nested heading using JSX Functional Component.
// const Name = function (){
//     return(<div className="title">
//         <h1>Heading1</h1>
//         <h2>Heading2</h2>
//         <h3>Heading3</h3>
//     </div>)
// }

// Passing one Component to another Component (Composition Component)
// const Heading = () => {
//   return (<div>
//         <Name />
//         </div>);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Name />);
// root.render(Heading2);


const AppLayout = () =>{
 return( <>
  <HeaderComponent />
  <Outlet />
  <Footer />
  </>)
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // loader: rootLoader,
    errorElement:<Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },  
      {
          path: "/about",
          element: <About />,
      },
      {
          path:"/login",
          element:<Login />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
     },
    
    ],
  }
  
]);

root.render(<RouterProvider router={router} />);