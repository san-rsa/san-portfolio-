import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Box, Flex} from "@chakra-ui/react";
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedin,
 
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css"

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:sanuthrahman@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/san-rsa",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sanuth-r/",
  },
  {
    icon: faFacebookSquare,
    url: "https://www.facebook.com/sanuth.rahman.7",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/sanuthrahman/",
  },
];



const Footer = () => {

  const options = {weekday: "none", day: "none", month: "none"};
  const year = new Date().getFullYear(options);


  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin=" auto"
          display="block"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
        >         <div className="foot" id="contact-me">
            { /* Add social media links based on the `socials` data */}
            {socials.map((icon, url) => { 
        return <a key={url} href={icon.url}><FontAwesomeIcon key={url} icon={icon.icon} size="1x"/> </a>})}
       </div>
          
          <p>SANUTH • © {year}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
