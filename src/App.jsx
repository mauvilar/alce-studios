import GrainOverlay from "./components/GrainOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Showcase from "./components/Showcase";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-void">
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Showcase />
        <Featured />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
