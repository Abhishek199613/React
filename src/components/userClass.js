import React from "react";

class UserClass extends React.Component { 
    constructor(props){
        super(props)

        this.state = {
      //      count: 0,
      //      count2: 2

            user_info: {
                name: "",
                location: ""
            }
        }

        //console.log(this.props.name + "Child Constructor called");
    }

    async componentDidMount(){
        //console.log(this.props.name + "Child Component Mount");
        const userData = await fetch("https://api.github.com/users/Abhishek199613");
        const jsonData = await userData.json();

        console.log(jsonData);

        this.setState({
            user_info: jsonData
        })
    }
    render() {
        const {name,location} = this.props;
        //const {count} = this.state;
       // console.log(this.props.name + "Child Render called");       
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1> */}
                {/* <h1>Count2: {count2}</h1> */}
                {/* <button onClick={()=>{
                    //NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count: this.state.count + 1,
                        //count2: this.state.count2 + 1
                    })
                }}>
                Count Increase
                </button> */}
                <h2>Name: {this.state.user_info.login}</h2>
                <h3>User Type: {this.state.user_info.type}</h3>
                <h4>Contact: @Abhishek13</h4>
            </div>
        )
    }

}

export default UserClass;



/***
 * 
 * 
---------------- Mounting Life Cycle-------------------

Constructor (dummy)
Render (dummy)
       <HTML dummy>
Component Did Mount 
        <API Call>
        <this.setState> --> State variable is updated


------------------Update Life Cycle--------------

render(API data)
<HTML (new API data)
ComponentDidUpdate

 */