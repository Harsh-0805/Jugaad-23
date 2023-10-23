import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Sponser from "./components/Sponsor";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Sponser />
      <Contact/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
