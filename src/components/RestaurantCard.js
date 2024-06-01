import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla
    } = resData?.info

    return (
        <div data-testid="cardTest" className="m-4 p-4 w-[200px] rounded-lg bg-gray-150 hover:bg-gray-300">
            <img className="rounded-lg w-50 h-50" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}


/** Higher Order Component */

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2">50% OFF</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard