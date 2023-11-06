import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";
import Intro from "./components/intro/intro";
import Works from "./components/works/work";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Intro />
    <Skills />
    <Works />
    <Contact />
    </div>
  );
}

export default App;
