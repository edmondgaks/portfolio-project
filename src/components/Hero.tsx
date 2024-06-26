import { Dribbble, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`flex h-[90vh] md:h-screen w-full md:flex-row flex-col items-center md:items-center justify-center`} 
        style={{
          backgroundImage: isDarkMode ? "url('/bg-hero.png')" : "url('/bg-hero-white.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="flex md:w-[45%] items-center justify-center relative flex-col gap-6">
          <h1 className={`md:text-5xl text-3xl font-semibold ${isDarkMode ? "text-white" : "text-black"}  font-sans`} style={{
            backgroundImage: isDarkMode ? "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 120%)" : 
            "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 120%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}>Madoc Pierce</h1>
          
          <p className={`font-sans md:w-[70%] w-[80%] md:text-sm  text-xs ${isDarkMode ? "text-[#C7C5C2]" : "text-black"}  font-light`}>Blank sheets become the liminal spaces where thoughts are given volume and emotions are rendered in a spectrum of colors that echo the complexity of feeling and the resonance of mental states.</p>
          <div className="w-[60%] mt-6 flex md:flex-row flex-col md:justify-between gap-5 items-center">
            <div className={`py-4 px-6 font-semibold rounded-sm text-xs bg-[#FFBA00] ${isDarkMode ? "text-black" : "text-white"}`}>Contact me</div>
            <div className="flex flex-row gap-2 items-center">
              <div className={`w-8 h-8 flex justify-center items-center ${isDarkMode ? "border-white" : "border-black"} border rounded-full`}>
                <Instagram size={16} color={`${isDarkMode ? "#fff" : "#000"}`} />
              </div>
              <div className={`w-8 h-8 flex justify-center items-center border ${isDarkMode ? "border-white" : "border-black"} rounded-full`}>
                <Twitter size={16} color={`${isDarkMode ? "#fff" : "#000"}`} />
              </div>
              <div className={`w-8 h-8 flex justify-center items-center border ${isDarkMode ? "border-white" : "border-black"} rounded-full`}>
                <Dribbble size={16} color={`${isDarkMode ? "#fff"  : "#000"}`} />
              </div>
              <div className={`w-8 h-8 flex justify-center items-center border ${isDarkMode ? "border-white" : "border-black"} rounded-full`}>
                <Facebook size={16} color={`${isDarkMode ? "#fff" : "#000"}`} />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <img src="/madoc.png" className="" width={490}  />
        </div>
      </div>
    )
}

export default Hero