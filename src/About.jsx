import React from "react";
import Common from "./Common";
import web from "./images/about.avif";

const About =() => {
    return (
        <>
            <Common 
            name="Welcome to About Page" 
            imgsrc={web} 
            visit = "/contact" 
            btnName = "Contact Now"
            />
        </>
    );
};

export default About ;