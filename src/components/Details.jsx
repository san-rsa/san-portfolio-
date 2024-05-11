import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box,ChakraProvider, Heading } from "@chakra-ui/react";
import Card from "./Card";
import Header from "./Header";
import { AlertProvider } from "../context/alertContext";
import { Container, Row, Col} from "react-bootstrap"
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./styles/card.css"
import Footer from "./Footer";





function Details(props) {
    return (
                <Container >          
                  <Header contact={"../#contact-me"} />
        <FullScreenSection
          backgroundColor="#14532d"
          isDarkBackground
          p={8}
          alignItems="flex"
          spacing={8}
        >
 

          <h1 as="h1" id="head">
            Featured Projects
          </h1>
          <Box
            display=""
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
            gridGap={8}
          >               <ChakraProvider>
            <AlertProvider>
         <Row>  
    
            {props.title.map((project) => (

         

                
              <Link to={project.link}>
                              <div className="card">
                 <Col md={3}>
            <Card
                title={project.title}
                imageSrc={project.getImageSrc()}
              />   
               </Col>
              </div>
              </Link>
        



            )            

            
            )}     
                
            </Row>            
             </AlertProvider>
            </ChakraProvider>
          </Box>    
        </FullScreenSection>     <Footer/> 
            </Container>
      );
    
}


export default Details