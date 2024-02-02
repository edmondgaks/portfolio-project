import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Moon, MoveLeft, Sun } from 'lucide-react';

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
      {/* <h2>Single Image Page</h2>
      <div className="max-h-[80vh]">
        {imageSrc && <img src={imageSrc} alt="Single Image" className="w-full h-[100%]" />}
      </div> */}
        <div className="flex flex-row items-center justify-around">
            <div className="flex flex-row gap-1 items-center">
                <MoveLeft color="#FFBA00" size={18} />
                <p className="text-xs text-[#FFBA00]">Back</p>
            </div>
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