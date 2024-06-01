import { useState } from "react";

const User = (props) =>{

    //Behind the scenes the state variables uses only one big Object to save these different state variables just like
    // in Class based components
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count 2: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Location: Jaipur</h3>
            <h4>Contact: @Abhishek13</h4>
        </div>
    )
}

export default User;