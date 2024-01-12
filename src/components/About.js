import { Outlet } from "react-router-dom";
import { Component } from "react";
const About = () =>{
    return(
 <>
    <h1>About</h1>
    <p>This is my About Section</p>
   <Outlet />

 </>
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

export default AboutClassComponent;