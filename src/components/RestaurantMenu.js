import { useParams } from "react-router-dom";
import { MENU_ITEMS_IMAGE } from "../utils/constants";
import useRestaurentMenuData from "../utils/useRestaurentMenuData";
import ShimmerMenu from "./ShimmerMenu";


const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo= useRestaurentMenuData(resId);
    
    if(resInfo === null){
        return <ShimmerMenu/>
    }
    console.log(resInfo);
    const { name, areaName,cuisines, avgRatingString,totalRatingsString    } = resInfo?.cards[0]?.card?.card?.info || {};
    const{message}=resInfo?.cards[0]?.card?.card?.info?.feeDetails|| {};
    const {itemCards,title}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card|| {};
    console.log(itemCards);

    

    return (

        <div className="menu flex flex-col mx-64 mt-16" >
            <div className="rest-details flex  justify-between border-b border-dashed border-gray-300 ">
               <div>
            <h3 className="font-extrabold ">{name}</h3>
            <p className="text-zinc-600 mt-3 text-[14px]">{cuisines.join(",")}</p> 

            <p className="text-zinc-600 text-[14px]">{areaName}</p>
            <p className="text-zinc-600 text-[14px] mt-2 mb-4">{message}</p>
            </div>
            <div className="menu_rating ">
                
                <h3 className="border border-solid border-stone-300 h-7 p-1 flex items-center justify-center ">{avgRatingString}</h3>
                <h3 className="border border-solid border-stone-300  border-t-0 h-10 p-1 text-[12px] flex items-center">{totalRatingsString}</h3>
                
            </div>
           

            </div>

            <div className="recommended flex flex-col mt-10 ">
            <h2 className="font-extrabold">{title}</h2>

           {itemCards.map((item)=>(

<div className="flex justify-between mt-4 border-b border-solid border-neutral-400">

<div key={item.card.info.id} className="item ">
<p className="font-semibold  text-stone-800">{item.card.info.name}</p>
<p className="font-medium text-[15px] text-stone-800 mt-1">{item.card.info.price / 100}.Rs</p>
<p className="description  w-[600px] text-[12px] text-stone-500">{item.card.info.description}</p>
</div>
<div className="menu_img_container w-32 p-5">
<img className="menu_img w-32 " src={MENU_ITEMS_IMAGE + item.card.info.imageId}/>
</div>
</div>
))}

</div>  
</div>
    )
}

export default RestaurantMenu;