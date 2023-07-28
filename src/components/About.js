import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class AboutClass extends React.Component{
  constructor(props){
    super(props);

    console.log("parent constructor")
  }

  componentDidMount(){
    console.log("parent did mount")
  }

  render(){
    console.log("parent render")
     return(
        <>
        <div>This is a food ordering application developed with namaste react course.</div>
        <UserClass name={"first "} location= {"cuttack"} contact= {"@Deepak22"}/>
        
        </>
     )
  }

}

export default AboutClass