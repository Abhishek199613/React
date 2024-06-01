import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"
import { CDN_URL } from "../utils/constants";

const ItemList = ({items, dummy}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        //action.payload
        dispatch(addItem(item))

    }
    
    return (
      <div className="py-2">
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="">
                        <span className="py-2">{item.card.info.name} - ₹ {item.card.info.price ?  item.card.info.price / 100 : item.card.info.defaultPrice /100}</span>
                    </div>
                    <p className="text-xs py-4">{item.card.info.description}</p>
                </div>                
                <div className="w-3/12 p-4">
                    <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                    <div className="absolute ">
                        <button className="p-2 bg-white shadow-lg mx-10 text-green-800 rounded-lg" onClick={() => handleAddItem(item)}> Add + </button>
                    </div>
                </div>
            </div>
        ))}

      </div>
    )
}

export default ItemList;