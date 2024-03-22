import {CDN_URL} from "../utils/constants"
const star= require("/images/rating_star.png");


const RestaurentCard =(props)=>{
    const {resData}=props;
 
    const {name,cuisines,avgRatingString,cloudinaryImageId,costForTwo,areaName}=resData?.info;
    const{slaString}=resData?.info?.sla;
     return(
         <div className="res-card flex    w-[220px]   flex-col ml-2 mt-2 mb-2 mr-10 rounded-3xl  transition-transform duration-300 transform hover:scale-95 relative  " >
             <div className="img-container  w-[220px] h-[135px] items-center justify-center overflow-hidden flex  rounded-3xl   scale-[290px] shadow-md shadow-gray-300 relative">
             <img className="res-img  w-[250px] h-[160px]   rounded-3xl relative " src={CDN_URL+cloudinaryImageId}/>

               {/* <div className="overlay absolute mt-3  flex  justify-center    w-full  bg-gradient-to-b from-transparent via-transparent to-gray-900 dark:to-gray-900"><h1 className="font-extrabold text-[28px]  text-zinc-50">{costForTwo}</h1></div> */}
             </div>
 
           <div className="details mt-1 p-2  flex flex-col text-nowrap truncate text-slate-900">
             <h4 className="truncate font-extrabold">{name}</h4>
             <h4 className="flex font-extrabold "><img src={star} className="w-[18px] h-[18] mr-1"/>{avgRatingString} • {slaString}</h4>
             <p className="cusines truncate text-[15px]">{cuisines.join(",")}</p>
             <p className="area text-[15px]">{areaName}</p>

              </div>

 
         </div>
     )
 }

 

 export default RestaurentCard;
 