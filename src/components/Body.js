import RestaurentCard from "./RestaurentCard ";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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
        console.log("above is data");

    }
   
    


//conditionalrendering
    // if(listOfRestaurent.length===0){
    //     return <Shimmer/>
    // }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false)
            return(
        <h1>Your are in offline</h1>       
            )
        



    return listOfRestaurent.length===0?<Shimmer/>:  (    

        <div className="body p-6 mx-14 mt-8  flex  flex-col">

            <div className="filter">

                <div className="search mb-5 flex justify-center">
                    <input type="text" id="search-box" className="search-box border-b border-solid border-gray-400 outline-none w-96 h-8  mr-5 p-2" placeholder="Type The Restaurent.." value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)

                    }}/>
                    <button className="bg-gray-300 px-5 py-1 outline-none rounded-md" onClick={()=>{
                        {console.log(searchText);}

                   const filteredRest = listOfRestaurent.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    
                 setFilteredRestaurent(filteredRest);}}>Search</button>

                </div>

                <div>
                <button className="filter-btn  mb-10 px-5 mt-8 py-1 border border-solid border-gray-200 rounded-3xl mr-4" onClick={()=>{


                    const filteredList=listOfRestaurent.filter(
                        (res)=>res.info.avgRatingString > 4.5 )

                        setFilteredRestaurent(filteredList)
                }}>Top Rated</button>
                 <button className="filter-btn  mb-10 px-5 mt-8 py-1 border border-solid border-gray-200 rounded-3xl  mr-4">Less than 300Rs</button>
                 <button className="filter-btn  mb-10 px-5 mt-8 py-1 border border-solid border-gray-200 rounded-3xl  mr-4">Fast Delivery</button>
               
                 </div>
            </div>
            
            <div className="restuarent-container flex  justify-start items-center pl-6 flex-wrap  overflow-hidden">

               {filteredRestaurent.map((restaurent)=>(
              <Link key={restaurent.info.id}  to={"/restaurant/"+restaurent.info.id}>  <RestaurentCard resData={restaurent}/></Link>
               ))}

            </div>
            
        </div>
 
    )
}

export default Body;
