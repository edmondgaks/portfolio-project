import { useTheme } from "../context/ThemeContext";
import Arts from "./Arts";
import images from "./Images";
import bgsec1 from "/bgsec1.png";
import bgsec2 from "/bgsec2.png";

const Gallery = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`flex gap-4 mt-10 flex-col justify-around items-center`}>
        <h1 className="perpetua text-3xl text-[#FFBA00] font-medium">GALLERY</h1>
        <p className={`font-sans text-center w-[70%] text-sm ${isDarkMode ? "text-[#C7C5C2]" : "text-black"} font-light`}>These works, like echoes in a void, attempt to visualize the vibrations of 		thought and the frequency of feeling. They are both the echo and the source, the 	question and the answer.</p>
        <div className="flex flex-col gap-5">
                <div className="w-full relative">
                    <div className="absolute left-0 top-[20%] h-screen">
                        <img src={bgsec1} alt="home left" className='hidden sm:block h-4/5' />
                    </div>
                    <Arts images={images.slice(0, 12)} />
                </div>
                <div className="w-full relative">
                    <div className="absolute right-0 top-[20%] h-screen">
                        <img src={bgsec2} alt="home left" className='hidden sm:block h-4/5' />
                    </div>
                    <Arts images={images.slice(12, 24)} />
                </div>
                <div className="w-full relative">
                    <div className="absolute left-0 top-[40%] h-screen">
                        <img src={bgsec1} alt="home left" className='hidden sm:block h-4/5' />
                    </div>
                    <Arts images={images.slice(24)} />
                </div>
            </div>
      </div>
    )
}

export default Gallery