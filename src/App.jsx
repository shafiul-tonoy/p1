import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <header className="w-full md:w-10/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-full md:w-10/12 mx-auto">
        <Hero />
        <Aboutme />
        <Skills />
        <Education />
      </main>
    </>
  );
}

export default App;
