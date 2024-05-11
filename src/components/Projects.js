import React from "react";
import { useLocation } from "react-router-dom";
import { GraphicsDesign, WebDeevelopment, Uiux } from "./WorkDb";
import Details from "./Details"
import Footer from "./Footer";

 

const Projects = () => {
      let url = (useLocation().pathname.substr(9));
      
    if (url == "webdesignanddevelopment") {
      return (<Details title={WebDeevelopment} />);
    } else if (url == "graphicsdesign") {
      return( <Details title={GraphicsDesign} />)
    } else if (url == "ui/uxresearchanddesign") {
      return ( <Details title={Uiux} />                     
      );
    }


};

export default Projects;
