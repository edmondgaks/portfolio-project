import { Dribbble, Facebook, Instagram, Moon, Sun, Twitter } from 'lucide-react';
import About from './components/About';
import { useState } from 'react';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Hero from './components/Hero';


function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  return (
    <div className={`h-full w-full ${isDarkMode ? 'bg-[#0C0C0C] shadow-lg backdrop-blur-md' : 'bg-[#FFFDFB]'}`}>
      <div className={`h-[10vh] shadow-md w-full flex flex-row items-center justify-around`}>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>ABOUT ME</p>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>WORKS</p>
        <p className={`text-xl font-medium perpetua ${isDarkMode ? 'text-white' : 'text-black'} -ml-12`}>MADOC PIERCE</p>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>CONTACT</p>
        <div onClick={toggleDarkMode} className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-[#0C0C0C]'}`}>
          {isDarkMode ?
          <Sun size={18} />
           :
           <Moon size={18} />
           }
        </div>
      </div>
      <Hero />
      <About />

      <Gallery />
      <Contact />
    </div>
  );
}

export default App;