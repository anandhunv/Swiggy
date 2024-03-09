import img1 from "/images/swigy_logo.png"
import { useState } from "react";


export const Header=()=>{
    const [btnName,setbtnName]=useState("Login");
    return(
        <div className="header">

            <div className="logo-container">
            <img  className="logo" src={img1}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>   
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
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