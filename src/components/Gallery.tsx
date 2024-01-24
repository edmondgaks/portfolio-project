import { useTheme } from "../context/ThemeContext";

const Gallery = () => {
    const { isDarkMode } = useTheme();
    const imageList = [
      { src: "/az.png", alt: "Image 1" },
      { src: "/fd.png", alt: "Image 2" },
      { src: "/ff.png", alt: "Image 3" },
      { src: "/gg.png", alt: "Image 4" },
      { src: "/Arabelle.jpg", alt: "Image 5" },
      { src: "/AuditoriumShores.JPG", alt: "Image 6" },
      { src: "/Pathways no.5.jpg", alt: "Image 7" },
      { src: "/Consciousness no.1.jpg", alt: "Image 8" },
      { src: "/Consciousness no.3.jpg", alt: "Image 9" },
      { src: "/Bio-architecture no.8.jpg", alt: "Image 10" },
      { src: "/Bio-architecture no.4.jpg", alt: "Image 11" },
      { src: "/Chromatic Cortex no.2.jpg", alt: "Image 12" },
      { src: "/Lungs.jpg", alt: "Image 13" },
    ];
    return (
        <div className={`flex gap-4 mt-10 flex-col justify-around items-center`}>
        <h1 className="perpetua text-3xl text-[#FFBA00] font-medium">GALLERY</h1>
        <p className={`font-sans text-center w-[70%] text-sm ${isDarkMode ? "text-[#C7C5C2]" : "text-black"} font-light`}>These works, like echoes in a void, attempt to visualize the vibrations of 		thought and the frequency of feeling. They are both the echo and the source, the 	question and the answer.</p>
        <div className="p-20">
          <div className="columns-1 lg:columns-3 md:columns-2 [&>img:not(:first-child)]:mt-5 ">
            {imageList.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Gallery