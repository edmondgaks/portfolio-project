import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (
      <div>
        <div className={`w-full md:flex md:flex-row flex-row justify-between  p-4 md:items-center h-[10vh] md:justify-around ${isDarkMode ? "bg-[#0E0D0C]" : "bg-[#FCF8F4]"}`}>
          <Link to="/artist-statement" className={`text-sm hidden md:flex  font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>ABOUT ME</Link>
          <p className={`text-sm font-sans hidden md:flex font-light  ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>WORKS</p>
          <Link to={"/"} className={`text-xl hidden md:flex font-medium perpetua ${isDarkMode ? 'text-white' : 'text-black'} -ml-12`}>MADOC PIERCE</Link>
          <p className={`text-sm font-sans hidden md:flex font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>CONTACT</p>
          {/* <div className=""></div> */}

          <div onClick={toggleDarkMode} className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-[#0C0C0C]'}`}>
            {isDarkMode ?
            <Sun size={18} />
            :
            <Moon size={18} />
            }
          </div>
        </div>
      </div>
    )
}

export default Navbar