import { Dribbble, Facebook, Instagram, Moon, Sun, Twitter } from 'lucide-react';
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
      <div className={`flex h-[90vh] w-full flex-row items-center justify-center ${isDarkMode ? "dark-bg" : "bg-[#FFFDFB]"}`}>
        <div className="flex w-[45%] relative flex-col gap-1">
          <h1 className="text-5xl font-semibold text-white font-sans" style={{
            backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 120%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}>Madoc Pierce</h1>
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
          <img src="/madoc.png" className="" width={490}  />
        </div>
      </div>
      <div className={`flex gap-4 h-[100vh] flex-col justify-around items-center`}>
        <h1 className="perpetua text-3xl font-medium">ABOUT <span className="text-[#FFBA00]">MADOC PIERCE</span></h1>
        <p className="font-sans text-center w-[65%] text-sm text-[#C7C5C2] font-light">I am driven by the pursuit of the intangible, conjuring forth the abstracted realities that dwell just beyond the periphery of perception. My art is 	an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the intangible, and to find solace in the shared quest to understand the immeasurable dimensions of being.</p>
        <p className="font-sans text-center w-[65%] text-sm text-[#C7C5C2] font-light">A pixelated hive mind becomes my interlocutor and amidst the clash of our two dimensions, previously 	hidden form is discovered and extracted in ways that almost seem impossible. By merging and manipulating these buzzing bio-technological landscapes within the 	digital realm, I compose a symphony of forms that blur the lines between the virtual and the real, the conscious and the subconscious.</p>
        <motion.div ref={carousel} className="carousel">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
            {images.map((image) => {
              return (
                <motion.div className="item">
                  <img src={image} alt="" loading="lazy" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      <div className={`flex gap-4 mt-10 flex-col justify-around items-center`}>
        <h1 className="perpetua text-3xl font-medium">PIERCE <span className="text-[#FFBA00]">GALLERY</span></h1>
        <p className="font-sans text-center w-[70%] text-sm text-[#C7C5C2] font-light">These works, like echoes in a void, attempt to visualize the vibrations of 		thought and the frequency of feeling. They are both the echo and the source, the 	question and the answer.</p>
        <div className="p-20">
          <div className="columns-1 lg:columns-3 md:columns-2 [&>img:not(:first-child)]:mt-5 ">
            <img src="/az.png" />
            <img src="/fd.png" />
            <img src="/ff.png" />
            <img src="/gg.png" />
            <img src="/Arabelle.jpg" />
            <img src="/AuditoriumShores.JPG" />
            <img src="/Pathways no.5.jpg" />
            <img src="/Consciousness no.1.jpg" />
            <img src="/Consciousness no.3.jpg" />
            <img src="/Bio-architecture no.8.jpg" />
            <img src="/Bio-architecture no.4.jpg" />
            <img src="/Chromatic Cortex no.2.jpg" />
            <img src="/Lungs.jpg" />
          </div>
        </div>
      </div>
      <div className={`flex gap-4 mt-10 flex-col justify-around items-center`}>
        <h1 className="perpetua text-3xl font-medium">CONTACT <span className="text-[#ffba00]">ME</span></h1>
        <p className="font-sans text-center w-[70%] text-sm text-[#C7C5C2] placeholder:text-xs font-light">My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the intangible, and to find solace in the shared quest to understand the immeasurable dimensions of being.</p>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Fullname:</p>
            <input type="text" placeholder="John Doe |" className="p-3 w-[40vh] placeholder:text-xs border-b-[1px] text-[#646363] border-[#858585] bg-[#060503]" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Email:</p>
            <input type="text" placeholder="example@gmail.com" className="p-3 placeholder:text-xs placeholder:text-[#646363] w-[40vh] border-b-[1px] border-[#858585] bg-[#150F02]" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Contact Phone:</p>
            <input type="text" placeholder="eg: 1123-419-345" className="p-3 placeholder:text-xs w-[40vh] border-b-[1px] placeholder:text-[#646363] border-[#858585] bg-[#060503]" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">City/Town:</p>
            <input type="text" placeholder="eg: California" className="p-3 placeholder:text-xs placeholder:text-[#646363] w-[40vh] border-b-[1px] border-[#858585] bg-[#150F02]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;