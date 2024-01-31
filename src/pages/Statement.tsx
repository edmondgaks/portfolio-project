import Navbar from "../components/Navbar"
import { useTheme } from "../context/ThemeContext";

const Statement = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`h-[100vh] flex flex-col w-full ${isDarkMode ? 'bg-[#0C0C0C] shadow-lg backdrop-blur-md' : 'bg-[#FFFDFB]'}`}> 
            <Navbar />
        </div>
    )
}

export default Statement