import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor (child)");

    //      🧿 State in Class Componenets.
    this.state = {
      count: 23,
      count2: 12,
    };
  }

  // 🧿 This is the best palce to call an API.
  //    It runs after the render method completely get executed (last).
  componentDidMount() {
    console.log("(child).");
    this.state = {
      userInfo: {
        name: "Dummy Name",
        followers: 0,
      },
    };
  }

  async componentDidMount() {
    // API call
    console.log("componentDidMount API (child)");

    const data = await fetch("https://api.github.com/users/sriom-singh");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  //  IF Component will re-Render then componentDidUpdate will run.
  componentDidUpdate() {
    console.log("componenetDidUpdate");
  }


  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  // 🧿 render() is mandatory 👀.
  render() {
    console.log("Render(child)");
    return (
      <>
        {/* 🧿 We can get props using "this" keyword. */}
        <img className="w-1/3" src={this.state?.userInfo?.avatar_url}></img>
        <p>Hello, I am {this.state?.userInfo?.name}.</p>
        <p>I am from {this.state?.userInfo?.location} .</p>

        {/* 🧿 We Cannot Mutate state directly - count = 24 */}
        {/* <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: 13,
            })
          }
        >
          Increase
        </button> */}
      </>
    );
  }
}

export default ClassComponent;

/*
 -----Life Cycle------
 Mounting
    Child Constructor
    Child Render
    Child componentDidMount

Updating
    API call
    Set State
    Child Render - child will render again after getting data from API (Updating)

    Child componentDidUpdate
    
Unmounting
    Child componentWillUnmount
*/
