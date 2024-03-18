import { Component } from "react"
import User from "./User"
import UserClass from "./UserClass"




class About extends Component{
    constructor(props){
        super(props)

        // console.log("parent constructor");
    }

    componentDidMount(){
        // console.log("parent MOUNT");
    }


    render(){
        // console.log("parent render");
        return(

            <div>
                <h1 className="font-extrabold text-[40px] flex justify-center items-center mx-24">About Us</h1>
                <UserClass  name={"Angel Di Maria"} location={"Benfica"}/>
            </div>
        )
    
    }
}




export default About