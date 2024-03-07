import RestaurentCard from "./RestaurentCard ";
import resList from "../utils/mockData";

import { useState } from "react";


const Body=()=>{

    let [listOfRestaurent,setlistOfRestaurent]=useState(resList )



    return (    

        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{


                    const filteredList=listOfRestaurent.filter(
                        (res)=>res.info.avgRatingString > 4.5 )

                        setlistOfRestaurent(filteredList)
                }}>Click for Top Rated Restaurant</button>
            </div>
            <div className="restuarent-container">

               {listOfRestaurent.map((restaurent)=>(
                <RestaurentCard key={restaurent.info.id} resData={restaurent}/>
               ))}

            </div>
        </div>
 
    )
}

export default Body;
