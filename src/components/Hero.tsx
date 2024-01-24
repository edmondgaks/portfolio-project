import { Dribbble, Facebook, Instagram, Twitter } from 'lucide-react';

// ${isDarkMode ? "dark-bg" : "bg-[#FFFDFB]"}
const Hero = () => {

    return (
        <div className={`flex h-[90vh] w-full flex-row items-center justify-center dark-bg`}>
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
    )
}

export default Hero