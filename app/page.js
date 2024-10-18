import About from "./_components/About";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Projects from "./_components/Projects";
import TechTools from "./_components/TechTools";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="px-10 pt-24 space-y-20">
        <section id="about">
          <About />
          <TechTools />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
}