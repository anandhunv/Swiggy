import {CDN_URL} from "../utils/constants"
const star= require("/images/rating_star.png");


const RestaurentCard =(props)=>{
    const {resData}=props;
 
    const {name,cuisines,avgRatingString,cloudinaryImageId,costForTwo,areaName}=resData?.info;
    const{slaString}=resData?.info?.sla;
     return(
         <div className="res-card flex    w-[250px] overflow-hidden  flex-col m-2 rounded-3xl  transition-transform duration-300 transform hover:scale-95 " >
             <div className="img-container relative w-[250px] h-[150px]  overflow-hidden flex  rounded-3xl items-end scale-[290px] shadow-md shadow-gray-300 ">
             <img className="res-img relative w-[250px] h-[160px]   rounded-3xl " src={CDN_URL+cloudinaryImageId}/>

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

 