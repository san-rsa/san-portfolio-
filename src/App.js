import ProjectsSection from "./components/ProjectsSection";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (

        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectsSection/> } />
        <Route path="/project/graphicsdesign" element={<Projects/> } />
        <Route path="/project/ui/uxresearchanddesign" element={<Projects/> } />
        <Route path="/project/webdesignanddevelopment" element={<Projects/> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
