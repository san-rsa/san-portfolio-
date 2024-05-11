import React, { useEffect, useRef } from "react";
import { Avatar } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css"
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Header = (p) => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="head">
           <Link to={"/" } >
            <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocLudq4FQKGle4JliPgCVOBlCci6rz6fBhi5kbDdMz_yFqg=s288-c-no"/>
    
        </Link>
            { /* Add social media links based on the `socials` data */}
          </div>



          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href={p.contact} onClick={handleClick("contactme")}>
                Contact Me
              </a>

            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
