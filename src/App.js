import About from "./about";
import "./App.css";
import Footer from "./footer";
import Hero from "./hero";
import Protofolio from "./protofolio";
import Skills from "./skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Protofolio />
      <Footer />
    </div>
  );
}

export default App;
