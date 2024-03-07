import {CDN_URL} from "../utils/contant.js"

const RestaurentCard =(props)=>{
    const {resData}=props;
 
    const {name,cuisines,avgRatingString,cloudinaryImageId,costForTwo}=resData?.info;
    const{slaString}=resData?.info?.sla;
     return(
         <div className="res-card">
             <div className="img-container">
             <img className="res-img"
             src={CDN_URL+cloudinaryImageId}/>
               <div className="overlay"><h1>{costForTwo}</h1>
         </div>
             </div>
 
           <div className="details">
             <h4>{name}</h4>
             <h4>⭐️{avgRatingString} • {slaString}</h4>
             <p className="cusines">{cuisines.join(",")}</p>
              </div>
              
 
         </div>
     )
 }

 export default RestaurentCard;
 