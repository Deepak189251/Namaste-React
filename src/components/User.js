import { useState } from "react"
const User = ({name, contact, location}) => {
  const [count] = useState(0)
  const [count1] = useState(1)
    return(
        <div className="user-card">
            <h6>Count = {count}</h6>
            <h6>Count1 = {count1}</h6>
            <h3>Name: {name}</h3>
            <h5>Location: {location}</h5>
            <h5>Contact: {contact}</h5>
        </div>
    )
}

export default User