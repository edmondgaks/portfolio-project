import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import images from './Images';
import { useTheme } from '../context/ThemeContext';


const About = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [carousel]);
    const { isDarkMode } = useTheme();
    return (
        <div className={`flex gap-4 h-[100vh] flex-col justify-around items-center`}>
        <h1 className={`perpetua text-3xl ${isDarkMode ? "text-white" : "text-black"} font-medium`}>ABOUT <span className="text-[#FFBA00]">MADOC PIERCE</span></h1>
        <p className={`font-sans text-center w-[65%] text-sm ${isDarkMode ? "text-[#C7C5C2]" : "text-black"} font-light`}>I am driven by the pursuit of the intangible, conjuring forth the abstracted realities that dwell just beyond the periphery of perception. My art is 	an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the intangible, and to find solace in the shared quest to understand the immeasurable dimensions of being.</p>
        <p className={`font-sans text-center w-[65%] text-sm ${isDarkMode ? "text-[#C7C5C2]" : "text-black"} font-light`}>A pixelated hive mind becomes my interlocutor and amidst the clash of our two dimensions, previously 	hidden form is discovered and extracted in ways that almost seem impossible. By merging and manipulating these buzzing bio-technological landscapes within the 	digital realm, I compose a symphony of forms that blur the lines between the virtual and the real, the conscious and the subconscious.</p>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex">
            {images.map((image) => {
              return (
                <motion.div className="item p-1 flex flex-col">
                  <div className="w-full h-[95%] flex flex-col gap-1 bg-white">
                    <img src={image} alt="" loading="lazy" className="pointer-events-none" />
                  </div>
                    {/* <div className="text-sm h-[5%] text-black font-medium">4th-Dimension no.1</div> */}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    )
}

export default About