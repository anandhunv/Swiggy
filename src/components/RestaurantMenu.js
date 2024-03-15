import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEMS_IMAGE } from "../utils/constants";
import useRestaurentMenuData from "../utils/useRestaurentMenuData";


const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo= useRestaurentMenuData(resId);
    
    if(resInfo === null){
        return <Shimmer/>
    }
    console.log(resInfo);
    const { name, areaName,cuisines, avgRatingString } = resInfo?.cards[0]?.card?.card?.info || {};
    const{message}=resInfo?.cards[0]?.card?.card?.info?.feeDetails|| {};
    const {itemCards,title}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card|| {};
    console.log(itemCards);

    

    return (

        <div className="menu">
            
            <h3>{name}</h3>
            <p>{cuisines.join(",")}</p> 

            <p>{areaName}</p>
            <p>{message}</p>
            <div className="menu_rating">
                
                <h3>{avgRatingString}⭐️</h3>
                

            </div>

            <div className="recommended">
            <h2>{title}</h2>

           {itemCards.map((item)=>(

<div key={item.card.info.id} className="item">
<p>{item.card.info.name}</p>
<p>{item.card.info.price / 100}.Rs</p>
<p className="description">{item.card.info.description}</p>

<div className="menu_img_container">
<img className="menu_img" src={MENU_ITEMS_IMAGE + item.card.info.imageId}/>
</div>
</div>
))}

</div>  
</div>
    )
}

export default RestaurantMenu;