import { Link, Outlet } from "react-router-dom";
import { Component } from "react";
const About = () =>{
    return(
 <div className="flex  align-middle justify-evenly w-full gap-0 mt-5">

  <div className=" flex flex-col justify-center gap-3 pl-8 ">
    <h1 className="text-3xl font-semibold uppercase tracking-tight">About</h1>
    <p className="w-3/4">Greetings! I'm Sri Om Sharan, a Front-end Developer with a passion for creating UI. My journey in learning has been a fascinating exploration, where I've had the opportunity to learn anything free from YouTube.</p>
    <Link to="profile" className="text-center mb-20 w-28 text-sm rounded bg-orange-500 p-4 mt-8 text-white">View Profile</Link>
   
    </div>
   <Outlet />
 </div>
)}



// 🧿 Life Cycle 
// Step1. Parent(about page) Constructor
// Step2. Parent Render
// Step3. Child(class Component) Constructor
// Step4. Child Render
// Step5. Child componentDidMount
// Step6. Parent componentDidMount

class AboutClassComponent extends Component {

   constructor(props){
      super(props);
      console.log("Constructor (parent)")
     
   }

   render(){
      console.log("render (parent)")
      return(
         <div className="about">
         <h1>About</h1>
         <p>This is my About Section (made using class component).</p>
        <Outlet />
      </div>
      )
   }
}

export default About;