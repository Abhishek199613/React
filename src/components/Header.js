import {LOGO_URL} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom"; // we will use react router dom link component as a replacement for anchor tag
// as anchor tag refresh the whole page but link component refresh only the component makes the react application faster.
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    let btnName = "Login";
    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // How does a const variable btnNameReact gets updated ?
    // When setbtnNameReact is called the header components rerender and btnNameReact value get changed to value 
    // with value passed to setbtnNameReact which is a new value t this const variable btnNameReact


    // if no dependency array => useEffect is called on every render.
    // if dependency array is empty = [] => useEffect is called on initial render (just once)
    // if dependency array is [btnNameReact] => called every time btnNameReact is updated, also called on initial render always
    useEffect(() => {
        console.log("use effect called")
    }, [btnNameReact])

    // Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-gray-100">
            <div className="w-32">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅"   :  "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold"><Link to="/cart" >Cart ({cartItems.length})</Link></li>
                    {/* <li className="px-4"><Link to="/login">Login</Link></li> */}
                    <button onClick={()=>{
                       btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login"); // when the state variable changes react will rerender the components
                        // rerender means running the function again
                        // when setbtnNameReact is called, the header component will run again but only the login button gets updated
                        // btnName is updated as per console but ui did not refresh to show logout button
                        // this is where concept of useState comes to update the UI of components or to make components dynamic
                    }} className="login">{btnNameReact}</button>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header