import { Moon, Sun } from 'lucide-react';
import './App.css';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`h-full w-full ${isDarkMode ? 'dark' : ''}`}>
      <div className={`h-[10vh] shadow-md w-full flex flex-row items-center justify-around ${isDarkMode ? 'bg-[#0C0C0C]' : 'bg-[#FFFDFB]'}`}>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>ABOUT ME</p>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>WORKS</p>
        <p className={`text-xl font-semibold perpetua ${isDarkMode ? 'text-white' : 'text-black'} -ml-12`}>RANDY SIMONY</p>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>CONTACT</p>
        <div onClick={toggleDarkMode} className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-[#0C0C0C]'}`}>
          {isDarkMode ?
          <Sun size={18} />
           :
           <Moon size={18} />
           }
        </div>
      </div>

    </div>
  );
}

export default App;