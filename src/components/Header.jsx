import { Link } from "react-router-dom";
import img1 from "/images/swigy_logo.png"
import { useState,useEffect,useContext } from "react";
// const img1= require("/images/swigy_logo.png");
// import img1 from "../../public/images/swigy_logo.png";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";




export const Header=()=>{
    const [btnName,setbtnName]=useState("Login");

    const onlineStatus= useOnlineStatus();

    const loginData= useContext(UserContext)

    // console.log(loginData);

    const {loggedIn}=loginData

    //subscribing  to the store using the Selector
    const cartItems= useSelector((store)=>store.cart.items)
    // console.log(cartItems);




    useEffect(()=>{
        // console.log("useEffect Called");
    },[btnName]);

    return(
        <div className="flex justify-between p-4 shadow-lg shadow-mb-4">


            <div className="logo-container">
            <img  className="w-44" src={img1}/>
            </div>

            <div  className="flex  items-center">
                <ul className="flex text-lg font-medium">
                    <li className="mr-10">{onlineStatus?"online":"offline "}</li>
                    <li className="mr-10"><Link to="/">Home</Link></li>   
                    <li className="mr-10"><Link to="/about">About Us</Link></li>
                    <li className="mr-10"><Link to="/contact">Contact</Link></li>


                    <li className="mr-10"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>


                    <li className="mr-10"><Link to="/grocery">Grocery</Link></li>
                    <button className="log-in mr-10" onClick={()=>{

                       btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                        // console.log(btnName);
                    }}>{btnName}</button>
                    <li className="mr-10 text-lime-600"><Link to="">{loggedIn}</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default Header;