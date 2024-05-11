import CardType from "./CardType";
 import {Type} from "./WorkDb";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box,ChakraProvider, Heading } from "@chakra-ui/react";
import { AlertProvider } from "../context/alertContext";
import { Container, Row, Col} from "react-bootstrap"
import "./styles/card.css"




function ProjectsSection(props) {
    return (
                <Container >
        <FullScreenSection
          backgroundColor="#14532d"
          isDarkBackground
          p={8}
          alignItems="flex"
          spacing={8}
        >
 

          <h1 id="h1">
            Featured Projects
          </h1>
          <Box
            display=""
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
            gridGap={8}
          >               <ChakraProvider>
            <AlertProvider>
         <Row>  
    
                 {Type.map((project) => (

        <div className="card"> 
   
     

          <CardType
              key={project.title.toString()}
              title={project.title}
              imageSrc={project.getImageSrc()}
            />    
            </div>
   
  
)   )   }
                
            </Row>            
             </AlertProvider>
            </ChakraProvider>
          </Box>    
        </FullScreenSection> 
            </Container>
      );
    
}


export default ProjectsSection