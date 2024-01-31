import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (
        <div className={`w-full flex flex-row items-center h-[10vh] mt-2 justify-around ${isDarkMode ? "bg-[#0E0D0C]" : "bg-[#FCF8F4]"}`}>
        <Link to="/artist-statement" className={`text-sm font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>ABOUT ME</Link>
        <p className={`text-sm font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>WORKS</p>
        <p className={`text-xl font-medium perpetua ${isDarkMode ? 'text-white' : 'text-black'} -ml-12`}>MADOC PIERCE</p>
        <p className={`text-sm font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>CONTACT</p>
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