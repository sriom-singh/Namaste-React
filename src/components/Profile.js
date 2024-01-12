import ClassComponent from "./ClassComponent";
 const Profile = () => {
  return (
    <div>
    <h2>Profile</h2>
    <ClassComponent name={"Sriom"} />
    </div>
  )
}

export default Profile;

/*
  Parent Constructor
  Parent Render
     Child Constructor
     Child Render
    
  DOM is updated
  Parent componentDidMount - beacause of async
    Child componentDidMount

    Child Render - child will render again after getting data from API (Updating)
*/