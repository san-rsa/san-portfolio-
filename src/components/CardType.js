import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useId } from "react";
import {  Link } from "react-router-dom";


const CardType = ({ title, imageSrc }) => {
 return(
  
    <div >
      <Link to={"/project/"+ title.replaceAll(" ", "").toLowerCase()}>
      <Image src={imageSrc}/>
      <Heading>{title}</Heading>
      </Link>

    </div>    
  );;
};

export default CardType;
