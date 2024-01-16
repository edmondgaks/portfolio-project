import { Dribbble, Facebook, Instagram, Moon, Sun, Twitter } from 'lucide-react';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import images from './components/Images';
function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel]);

  return (
    <div className={`h-full w-full ${isDarkMode ? 'bg-[#0C0C0C] shadow-lg backdrop-blur-md' : 'bg-[#FFFDFB]'}`}>
      <div className={`h-[10vh] shadow-md w-full flex flex-row items-center justify-around`}>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>ABOUT ME</p>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>WORKS</p>
        <p className={`text-xl font-medium perpetua ${isDarkMode ? 'text-white' : 'text-black'} -ml-12`}>RANDY SIMONY</p>
        <p className={`text-base font-sans font-light ${isDarkMode ? 'text-[#FFFFFF99]' : 'text-[#0C0C0C]'}`}>CONTACT</p>
        <div onClick={toggleDarkMode} className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-[#0C0C0C]'}`}>
          {isDarkMode ?
          <Sun size={18} />
           :
           <Moon size={18} />
           }
        </div>
      </div>
      <div className={`flex h-[90vh] w-full flex-row items-center justify-center ${isDarkMode ? "dark-bg" : "bg-[#FFFDFB]"}`}>
        <div className="flex w-[45%] relative flex-col gap-1">
          <img src="/stars.png" className="absolute bottom-44 -translate-x-9" width={50}  />
          <h1 className="text-5xl font-semibold text-white font-sans" style={{
            backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 120%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}>Randy Simmony</h1>
          <h1 className="text-5xl font-semibold text-white font-sans" style={{
            backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 120%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}>I am an artist of year</h1>
          <p className="font-sans w-[70%] text-sm text-[#C7C5C2] font-light">Blank sheets become the liminal spaces where thoughts are given volume and emotions are rendered in a spectrum of colors that echo the complexity of feeling and the resonance of mental states.</p>
          <div className="w-[60%] mt-6 flex flex-row justify-between items-center">
            <div className="py-4 px-6 font-semibold rounded-sm text-xs bg-[#FFBA00] text-black">Contact me</div>
            <div className="flex flex-row gap-2 items-center">
              <div className="w-8 h-8 flex justify-center items-center border border-white rounded-full">
                <Instagram size={16} />
              </div>
              <div className="w-8 h-8 flex justify-center items-center border border-white rounded-full">
                <Twitter size={16} />
              </div>
              <div className="w-8 h-8 flex justify-center items-center border border-white rounded-full">
                <Dribbble size={16} />
              </div>
              <div className="w-8 h-8 flex justify-center items-center border border-white rounded-full">
                <Facebook size={16} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/Rectangle 1.png" className="" width={500}  />
        </div>
      </div>
      <div className={`flex gap-4 h-[100vh] flex-col justify-around items-center`}>
        <h1 className="perpetua text-3xl font-medium">ABOUT <span className="text-[#FFBA00]">RANDY SIMMONY</span></h1>
        <p className="font-sans text-center w-[70%] text-sm text-[#C7C5C2] font-light">I am driven by the pursuit of the intangible, conjuring forth the	abstracted realities that dwell just beyond the periphery of perception. My art is 	an invitation to viewers: to delve into the visual manifestations of mindscapes, to 	grapple with the intangible, and to find solace in the shared quest to understand the immeasurable dimensions of being.</p>
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
            {images.map((image) => {
              return (
                <motion.div className="item">
                  <img src={image} alt="" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}

export default App;