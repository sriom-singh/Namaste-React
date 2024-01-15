import React, { lazy,Suspense } from "react";
import { createBrowserRouter,createRoutesFromElements,Outlet,Route,RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./src/components/HeaderComponent";
import Body from "./src/components/Body";
import Error from "./Error";
import About from "./src/components/About";
import Footer from "./src/components/Footer";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";
import Profile from "./src/components/Profile";
import Shimmer from "./src/components/Shimmer";


//-------------------------------------------------------------------
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
//---------------------------------------------------------------
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
// --------------------------------------------------------------------



// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// Dynamic Import
// On Demand Loading

// Don't write this in a Component.
const InstaDelivery = lazy(()=> import("./src/components/InstaDelivery"));
// Upon on Demand Loading  -> upon render -> suspend loading

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
          children:[
            {
              path:"profile",
              element:<Profile />
            },
          ]
      },
      {
          path:"login",
          element:<Login />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
     },
     {
      path: "/instaDelivery",
      // Suspense is like Promise.
      element: (<Suspense fallback={<Shimmer />}>
                  <InstaDelivery />
              </Suspense>),
     },
  
    ],
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);