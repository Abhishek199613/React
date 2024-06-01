import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react"; // import using name import
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    //Super Powerful React Variable declaration to create state variable
    // whenever state variable changes, React will rerenders the component
    //const [listOfRestaurants, setListOfRestaurants] = useState(resList) // Destructuring of Array
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);
    //useState will return an array that is why listOfRestaurants and setListOfRestaurants are in array brackets
    
    // const [listOfRestaurants, setListOfRestaurants] = arr; 
    // const listOfRestaurants = arr[0];
    // const listOfRestaurants = arr[1];


    // Never use useSate hook outside the component => bad practice
    // Always use useState hook inside the componet and initailize them at the top level of the component at the very start => good practice
    // Do not use useState inside if, else, or and condition or for loop or any function as it will create inconsistency in react as well as in the application => bad practice
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log("json", json)
        
        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    }
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (<h1>Looks Like You're offline. Please check your internet connection.</h1>)

    const {loggedInUser, setUserName} = useContext(UserContext);
    
    //Conditional Rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />
    // } OR

    // searchText field will not letting type in the searchbox as the searchtext variable is bind to the inputbox
    // and by typing we are trying to update the value of inputbox

    // Whenever state variable changes react triggers reconciliation cycle (rerenders the component)
    return listOfRestaurants.length === 0 ? ( <Shimmer /> ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/> 
                    <button className="px-4 py-2 bg-green-50 m-4 rounded-lg" name="Search"
                    onClick={()=>{
                        // Filter the restaurant and update the UI
                        console.log(searchText);

                        console.log("listOfRestaurants", listOfRestaurants);

                       let filteredRes = listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredListOfRes(filteredRes);

                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button
                        className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={()=>{
                        let filterRes = listOfRestaurants.filter((res)=>                       
                            res.info.avgRating > 4
                        );
                        setFilteredListOfRes(filterRes);
                        }
                        }
                        >Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>User Name</label>&nbsp;
                    <input className="border border-black" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>

                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredListOfRes.map((restaurant)=> (


                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    {restaurant.info.aggregatedDiscountInfoV3 ?
                     (<RestaurantCardPromoted resData={restaurant}/>) : 
                     (<RestaurantCard resData={restaurant}/>) }</Link>
                  ))
                }
            </div>          
        </div>
    )
}

export default Body