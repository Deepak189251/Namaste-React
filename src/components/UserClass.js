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
   

   componentDidMount(){
     fetch("https://api.github.com/users/Deepak189251")
     .then((res) => {
        res.json()
     })
     .then((res) => {
        this.setState({
            userInfo: res
        })
     })

     console.log(this.userInfo);
    //console.log(this.props.name + "did mount")
   } 

   render(){
    const {name, location, contact} = this.userInfo;
   // console.log( this.props.name + "child render")
    return(
        <div className="user-card">
            <h6>Count = {this.state.count}</h6>
            <button onClick={()=> {
                this.setState({
                    count: this.state.count+ 1
                })
            }}>Increment button</button>
            <h3>Name: {name}</h3>
            <h5>Location: {location}</h5> 
        </div>
    )
   }
}

export default UserClass