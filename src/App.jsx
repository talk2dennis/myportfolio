import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import "./styles/globals.css";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </>
  );
}

export default App;
