import React, { lazy,Suspense, useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { GIT_HUB } from "./utils/constants";
const Grocery= lazy(()=>import("./components/Grocery"))




//top level component

const AppLayout=()=>{

    const [userName,setUserName]=useState()

    useEffect(()=>{

        fetchData();

    },[])
    const fetchData=async()=>{
        try {
            const response = await fetch(GIT_HUB);
            const json = await response.json();
            setUserName(json.name);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    



    
    
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedIn:userName,setUserName}}>
        <div className="apps ">
            <Header />
            
            <Outlet />      
        
        </div>
        </UserContext.Provider>  
        </Provider>  )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About/>,
            },
            

            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart />
            },

        ],
        errorElement:<Error />,
    },



    

    
])




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)