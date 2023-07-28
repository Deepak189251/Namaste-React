import React from "react";

class UserClass extends React.Component {
   constructor(props){
     super(props)
    // This is how we create a state variable in class based components.
    this.state = {
        userInfo: {
            name: "demo"
        }
    }
   // console.log(this.props.name + " constructor") 
   }
   

 async componentDidMount(){
    
    const data = await fetch("https://api.github.com/users/Deepak189251");
    const json = await data.json();
    this.setState({
        userInfo: json
    });







  /*   fetch("https://api.github.com/users/Deepak189251")
     .then((res) => {
        res.json()
     })
     .then((res) => {
        this.setState({
            userInfo: res
        })
        console.log(this.state.userInfo)
     }) */

     console.log(this.state.userInfo);
    //console.log(this.props.name + "did mount")
   } 

   render(){
    console.log(this.state.userInfo);
    const {name, location} = this.state.userInfo;
   // console.log( this.props.name + "child render")
    return(
        <div className="user-card">
            <h3>Name: {name}</h3>
            <h5>Location: {location}</h5> 
        </div>
    )
   }
}

export default UserClass