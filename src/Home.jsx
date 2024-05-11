import React from "react";
import Common from "./Common";
import web from "./images/home.png" ;

const Home =() => {
    return (
        <>
            <Common 
            name="Grow your business with" 
            imgsrc={web} 
            visit = "/service" 
            btnName = "Get Started"
            />
        </>
    );
};

export default Home ;