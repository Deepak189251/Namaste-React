import React from "react";

class UserClass extends React.Component {
   constructor(props){
    super(props)


    // This is how we create a state variable in class based components.
    this.state = {
        count: 0,
        count2: 2
    }
   }
   

   render(){
    const {name, location, contact} = this.props
    return(
        <div className="user-card">
            <h6>Count = {this.state.count}</h6>
            <h6>Count2 = {this.state.count2}</h6>
            <h3>Name: {name}</h3>
            <h5>Location: {location}</h5>
            <h5>Contact: {contact}</h5>
        </div>
    )
   }
}

export default UserClass