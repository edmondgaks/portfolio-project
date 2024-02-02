import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Moon, MoveLeft, Sun } from 'lucide-react';

interface SingleImagePageProps {
}

const SingleImage: FC<SingleImagePageProps> = () => {
    const location = useLocation();
    const imageSrc = location.state?.image;
    const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div className="w-full h-[100vh] flex flex-col justify-between p-6"
    style={{
        backgroundImage: isDarkMode ? "url('/single-bg.png')" : "url('/single-bg-white.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat" }}>
        <div className="flex flex-row items-center justify-around">
            <Link to={"/"} className="flex cursor-pointer flex-row gap-1 items-center">
                <MoveLeft color="#FFBA00" size={18} />
                <p className="text-xs text-[#FFBA00] cursor-pointer">Back</p>
            </Link>
            <div onClick={toggleDarkMode} className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-[#0C0C0C]'}`}>
                {isDarkMode ?
                    <Sun size={16} />
                    :
                    <Moon size={16} />
                }
            </div>
        </div>
        <div className="w-[80%] mx-auto bg-[#18130E] flex flex-row h-[80vh]">
            {imageSrc && <img src={imageSrc} alt="Single Image" className="w-full h-[100%]" />}
            <div className="w-[80%]">Hello</div>
        </div>
    </div>
  );
};

export default SingleImage;