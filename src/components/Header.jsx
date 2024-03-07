import img1 from "/images/swigy_logo.png"


export const Header=()=>{
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

                </ul>
            </div>
        </div>
    )
}

export default Header;