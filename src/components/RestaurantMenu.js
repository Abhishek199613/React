import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    //suppose we have to pass a data from grandParent to the grandChildren (itemList), we cannot directly pass data to it, but through subsequent children
    const dummy_data = "Dummy Data"
    //this above process is called props drilling.

    const [showIndex, setShowIndex] = useState(0)

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);// Calling custom hooks to make it a single responsibility code and modular one.
    

    if (resInfo === null) return  <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

    console.log("data",resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);

    const categories =  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p> 
            {/** Categories Accordion */}
            {categories.map((category, index)=>(
                /** Controlled Component as RestaurantMenu is controlling the RestaurantCategory component using showItems */
                <RestaurantCategory key={category.card.card.title}
                data={category.card.card}
                showItems={ index === showIndex && true}
                showIndex={() => setShowIndex(index)}
                dummy={dummy_data}
                 />
            ))}
        </div>
    )
}

export default RestaurantMenu;