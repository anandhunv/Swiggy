import { useParams } from "react-router-dom";
import useRestaurentMenuData from "../utils/useRestaurentMenuData";
import ShimmerMenu from "./ShimmerMenu";
import RestaurantAccordianceCategory from "./RestaurantAccordianceCategory";
import {  useState } from "react";



const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo= useRestaurentMenuData(resId);
    const [showIndex,setShowIndex]=useState(null);



    
    
    if(resInfo === null){
        return <ShimmerMenu/>
    }
    console.log(resInfo);
    const { name, areaName,cuisines, avgRatingString,totalRatingsString,message} = resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards,title}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card|| {};
    console.log(itemCards);

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"              )
    console.log(categories);


    

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
            <div >
            {categories.map((category,index)=> {
                //controlled component
                return(
                    <RestaurantAccordianceCategory

                     key={category?.card?.card?.title} 
                     data={category?.card?.card} 

                     showItems={index === showIndex}
                    
                     setShowIndex={()=>setShowIndex(index)}

                    />
            )}

                )
            }
            </div>

           
        </div>
    )
}

export default RestaurantMenu;