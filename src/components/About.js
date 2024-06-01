import React from "react";
import User from "./User";
import UserClass from "./userClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props){
        super(props);

      //  console.log("Parent Constructor called");
    }

    // Used to make API Calls so that component did load fast just like in useEffect()
    componentDidMount(){
      //  console.log("Parent Component mount");
    }

    render() {
        //console.log("Parent Render called");
        return (
            <div>
                <h1>About Us</h1>
                <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is a Namaste React Web Series</h2>
                {/* <User name={"Abhishek Sarwate (function)"}/> */}
                <UserClass name={"First (Class)"} location={"Jaipur Class"}/>
                {/* <UserClass name={"Second (Class)"} location={"USA"}/> */}
            </div>
        )
    }
}

// const About = () =>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This is a Namaste React Web Series</h2>
//             {/* <User name={"Abhishek Sarwate (function)"}/> */}
//             <UserClass name={"Abhishek Sarwate (Class)"} location={"Jaipur Class"}/>
//         </div>
//     )
// }


export default About;