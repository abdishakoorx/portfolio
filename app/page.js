import About from "./_components/About";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="px-10">
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}
