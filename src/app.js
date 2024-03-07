import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




//top level component

const AppLayout=()=>{
    console.log(<Body/>);
    return(
        <div className="apps">
            <Header/>
            <Body/>
        
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)