import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <div className='flex w-screen h-auto bg-[#EBFDF1] min-h-screen flex-col  justify-center relative'>
      <Nav />
      <div id='home' className='relative mt-10'>
        <Banner id='home' className='drop-shadow-xl' />
      </div>
      <Services />
    </div>
  );
}

export default App;
