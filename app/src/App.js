import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Techs from "./components/Techs";

function App() {
  return (
    <div className='flex w-screen h-auto bg-[#EBFDF1] min-h-screen flex-col  justify-center relative'>
      <Nav />
      <div id='home' className='relative'>
        <Banner id='home' className='drop-shadow-xl' />
      </div>
      <Services />
      <About/>
      <Techs />
      <Reviews />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
