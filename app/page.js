import About from "./_components/About";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Projects from "./_components/Projects";
import TechTools from "./_components/TechTools";

export default function Home() {
  return (
    <div className="px-10">
      <Header/>
      <About/>
      <TechTools/>
      <Projects/>
      <Footer/>
    </div>
  );
}
