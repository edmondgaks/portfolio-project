import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (
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
    )
}

export default Navbar