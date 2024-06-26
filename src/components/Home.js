import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";
import Footer from "./Footer";
import { AlertProvider } from "../context/alertContext";
import Alert from "./Alert";


// function back() {
//   var bodyb = document.querySelector("body");
//   var stle = bodyb.style;
//   var value = window.getComputedStyle(bodyb).getPropertyValue('backgroundColor');
 
 
//      // styles1 ="linear-gradient(170deg, rgb(22, 53, 57) 36.75%, rgba(40, 71, 132, 0.96) 61.09%, rgba(49, 165, 81, 0.92) 92.43%)"
 
 
//      // styles2 = "linear-gradient(170deg, rgba(49, 165, 81, 0.92) 36.75%, rgb(22, 53, 57) 61.09%, rgba(40, 71, 132, 0.96) 92.43%)"
 
 
//      // styles3 = "linear-gradient(170deg, rgba(40, 71, 132, 0.96) 36.75%, rgba(49, 165, 81, 0.92) 61.09%, rgb(22, 53, 57) 92.43%)"
 
//      styles1 ="rgb(22, 53, 57)"
 
 
//      styles2 = "rgba(49, 165, 81, 0.92)"
 
 
//      styles3 = "rgba(40, 71, 132, 0.96)"
     
//      console.log(value);
     
 
 
 
//      if (value == styles1) {
//         stle.background = styles2
 
//      }  else if (value == styles2) {
//        stle.background = styles3
 
//      } else if (value == styles3) {
//        stle.background = styles1     
//      }
     
//  setTimeout(back, 5000);
//  }
 
//  back()







function App() {
  return (
    <div>

          <Header contact={"#contact-me"} />

    <ChakraProvider>
      <AlertProvider>
        <main>

          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>

  
      </AlertProvider>
    </ChakraProvider>
    </div>
  );
}

export default App;
