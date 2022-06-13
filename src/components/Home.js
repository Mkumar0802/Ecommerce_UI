import React from "react";
// import Catagories from "./Categories ";
import Downbar from "./Downbar";


import Main from "./Main";
import Offers from "./Offer";
import Products from "./Products";

function Home(){

    return(
        <div >
            
            <Main/>
            <Downbar/>
            <Offers/>
            <Products/>
           

            
        </div>
    )
}

export default  Home;