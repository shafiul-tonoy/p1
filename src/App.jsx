import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <header className="w-full">
        <Navbar />
      </header>
      <main className="w-full md:w-10/12 mx-auto">
        <Hero />
        <Aboutme />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
