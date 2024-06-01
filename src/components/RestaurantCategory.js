import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, showIndex, dummy}) => {

    const handleClick = () =>(
        showIndex()
    )

   
    return (
        <div className="w-6/12 mx-auto my-10 bg-gray-50 shadow-lg p-4">
            {/**Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-sm">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {/**Accordion Body */}
            {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
        </div>
    );
};

export default RestaurantCategory;