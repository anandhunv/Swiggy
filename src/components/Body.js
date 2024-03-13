import RestaurentCard from "./RestaurentCard ";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Body=()=>{
    console.log("body renendered");
    console.log(useState());


    const [listOfRestaurent,setlistOfRestaurent]=useState([]);
    const [filteredRestaurent,setFilteredRestaurent]=useState([]);

    const [searchText,setSearchText]=useState("");
    

    useEffect(()=>{

        fetchData();

    },[]);

    const fetchData = async ()=>{
        const data= await fetch(API_URL)
        const json= await data.json();
        console.log(json);
        setlistOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        console.log(listOfRestaurent);

    }
   
    


//conditionalrendering
    // if(listOfRestaurent.length===0){
    //     return <Shimmer/>
    // }

    return listOfRestaurent.length===0?<Shimmer/>:  (    

        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" id="search-box" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)

                    }}/>
                    <button onClick={()=>{
                        {console.log(searchText);}

                   const filteredRest= listOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                   setFilteredRestaurent(filteredRest); 



                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{


                    const filteredList=listOfRestaurent.filter(
                        (res)=>res.info.avgRatingString > 4.5 )

                        setFilteredRestaurent(filteredList)
                }}>Click for Top Rated Restaurant</button>
            </div>
            <div className="restuarent-container">

               {filteredRestaurent.map((restaurent)=>(
              <Link key={restaurent.info.id}  to={"/restaurant/"+restaurent.info.id}>  <RestaurentCard resData={restaurent}/></Link>
               ))}

            </div>
        </div>
 
    )
}

export default Body;
