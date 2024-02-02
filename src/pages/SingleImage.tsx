import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Moon, MoveLeft, MoveRight, Sun } from 'lucide-react';

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
        <div className={`w-[70%] mx-auto ${isDarkMode ? "bg-[#18130E]" : "bg-[#FBF7F2]"} flex flex-row h-[80vh]`}>
            {imageSrc && <img src={imageSrc} alt="Single Image" className="w-full h-[100%]" />}
            <div className="w-[90%] flex flex-col justify-around items-start mt-10">
                <div className="w-[70%] mx-auto">
                    <div className={`w-full flex ${isDarkMode ? "text-white" : "text-black"}  flex-row justify-between  items-center`}>
                        <p className="text-sm  opacity-90">Title:</p>
                        <p className="font-semibold text-lg capitalize">THE MYSTERY WORLD</p>
                    </div>
                    <div className={`w-full flex ${isDarkMode ? "text-white" : "text-black"} flex-row justify-between  items-center`}>
                        <p className="text-sm  opacity-90">Size:</p>
                        <p className="font-semibold text-lg capitalize">780 x 920</p>
                    </div>
                    <div className={`w-full flex ${isDarkMode ? "text-white" : "text-black"} flex-row justify-between  items-center`}>
                        <p className="text-sm  opacity-90">Medium:</p>
                        <p className="font-semibold text-lg capitalize">Water Based</p>
                    </div>
                </div>
                <div className={`${isDarkMode ? "bg-[#1F1A15]" : "bg-[#F3F0EC]"} shadow-md rounded-md flex flex-col gap-4 py-4 px-6 w-[70%] mx-auto`}>
                    <h1 className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Inquire about availabity:</h1>
                    <div className="h-[0.2px] w-full bg-[#a1a1a1] mx-auto"></div>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-[#FFBA00] font-medium font-sans">City/Town:</p>
                        <input type="text" placeholder="example@gmail.com" className={`p-3 placeholder:text-sm ${isDarkMode ? "text-[#646363]  bg-[#060503]" : "bg-[#E4E2DE] text-black"} placeholder:text-[#646363] border-b-[1px] border-[#858585]`} />
                        <button type="submit" className={`bg-[#FFBA00] px-4 py-2 ${isDarkMode ? "text-black" : "text-white"} font-bold text-xs rounded-sm flex flex-row items-center gap-4`}>
                            <p className="w-[80%]">Send message</p>
                            <div className={`w-[1px] h-[30px] ${isDarkMode ? "bg-black" : "bg-white"}`}></div>
                            <MoveRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SingleImage;