import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Alert from "./Alert";
import { AlertProvider } from "../context/alertContext";
import "./styles/card.css"


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 return(


    // <ChakraProvider>
    // <AlertProvider>
    // <main>    

    <div className="" >
      <Image src={imageSrc}/>
      <h1>{title}</h1>
      <Text>{description}</Text>
    </div>   
    //   </main>
    // </AlertProvider>
    // </ChakraProvider>
      
     




  );;
};

export default Card;
