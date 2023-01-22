import "./App.css";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className='app bg-[#E8F1FF] p-2 lg:max-w-7xl mx-auto flex flex-col gap-9'>
        <Navbar />
        <Info />
        <Hero />
      </div>
    </>
  );
}

export default App;
