import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Abdulrahman Sanuth!";
const bio1 = "A frontend developer, and ui/ux and graphics designer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

  <VStack spacing={16}>
      <VStack spacing={4}>
      <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocLudq4FQKGle4JliPgCVOBlCci6rz6fBhi5kbDdMz_yFqg=s288-c-no" size="2x1"/>
        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
      </VStack>  
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
