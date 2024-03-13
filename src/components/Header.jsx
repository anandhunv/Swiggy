import { Link } from "react-router-dom";
// import img1 from "/images/swigy_logo.png"

import { useState,useEffect } from "react";

const logo= require("/images/swigy_logo.png");
export const Header=()=>{
    const [btnName,setbtnName]=useState("Login");




    useEffect(()=>{
        console.log("useEffect Called");
    },[btnName]);

    return(
        <div className="header">


            <div className="logo-container">
            <img  className="logo" src={logo}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>   
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <button className="log-in" onClick={()=>{

                       btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                        console.log(btnName);
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;