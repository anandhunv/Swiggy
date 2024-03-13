import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
           userInfo:{
            name:"asjcck",
           }
            
        }
        console.log(this.props.name+"child contsrtuctor");

    }

   async componentDidMount(){
        console.log(this.props.name+"child MOUNT");


        const data= await fetch("  https://api.github.com/users/anandhunv");
        const json =await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        })
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render(){
        console.log(this.props.name+" child render");



        const {name,location,bio,avatar_url}=this.state.userInfo;


        return <div className="user-card">
         <img className="about-img" src={avatar_url}/>
         <div>
        <h2>Name:{name}</h2>
        <p>Location:{location}</p>
        <p>Bio:{bio}</p>
        </div>
        
    

    </div>
    }
}

export default UserClass;