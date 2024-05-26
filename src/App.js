import "./App.css";
import Intro from "./components/Intro/Intro";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Reward from "./components/Rewards/Rewards";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutUs />
      <Features />
      <Testimonials />
      <Reward />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
