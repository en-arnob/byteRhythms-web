import Banner from "./components/Banner";
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
      <Techs />
      <Reviews />
    </div>
  );
}

export default App;
