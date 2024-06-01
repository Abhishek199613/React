import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";


// Chunking
// Code Splitting 
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
//Dynaimic Import
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () =>{

    const [userName, setUserName] = useState();

    //Authentication
    useEffect(()=>{
        //make an API call and send username and password
        const data = {
            name: "Abhishek Sarwate"
        };
        setUserName(data.name);

    }, [])

//if userContext is wrapped inside div.app outside only header component the loggedInUser will only update in header component and 
// in rest of the app it contains default User value
    return (
        //This is a react redux thing and to provide appStore which is a redux thing 
        <Provider store={appStore}>
            {/* outSide will contain default user */}
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
             {/**This will contain updated value */}
                <div className="app">
                   
                    {/**This will contain Elon Musk */}
                        <Header/>
                
                    {/** Outlet will replace by the router and its children router */}
                    <Outlet/>
                </div> 
            </UserContext.Provider>
            </Provider>
        )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/login",
                element: <Login />
            },
            
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);