import { MoveRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`flex gap-4 mt-10 flex-col justify-around items-center`}
        style={{
          backgroundImage: isDarkMode ? "url('/contact-bg.png)" : "url('/contact-bg-white.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <h1 className={`perpetua text-3xl ${isDarkMode ? "text-white" : "text-black"} font-medium`}>CONTACT <span className="text-[#ffba00]">ME</span></h1>
        <p className={`font-sans text-center w-[60%] text-sm ${isDarkMode ? "text-[#C7C5C2]" : "text-black"}  placeholder:text-xs font-light`}>My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the intangible, and to find solace in the shared quest to understand the immeasurable dimensions of being.</p>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Fullname:</p>
            <input type="text" placeholder="John Doe |" className={`p-3 w-[40vh] ${isDarkMode ? "text-[#646363]  bg-[#060503]" : "bg-[#EDE9DF] text-black"} border-[#858585] placeholder:text-xs border-b-[1px]`} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Email:</p>
            <input type="text" placeholder="example@gmail.com" className={`p-3 placeholder:text-xs ${isDarkMode ? "text-[#646363]  bg-[#060503]" : "bg-white text-black"} placeholder:text-[#646363] w-[40vh] border-b-[1px] border-[#858585]`} />
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Contact Phone:</p>
            <input type="text" placeholder="eg: 1123-419-345" className={`p-3 placeholder:text-xs w-[40vh] ${isDarkMode ? "text-[#646363]  bg-[#060503]" : "bg-white text-black"} border-b-[1px] placeholder:text-[#646363] border-[#858585]`} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">City/Town:</p>
            <input type="text" placeholder="eg: California" className={`p-3 placeholder:text-xs ${isDarkMode ? "text-[#646363]  bg-[#060503]" : "bg-white text-black"} placeholder:text-[#646363] w-[40vh] border-b-[1px] border-[#858585]`} />
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-2">
          <p className="text-sm text-[#FFBA00] font-medium font-sans">Message:</p>
          <textarea placeholder="Write your message" className={`placeholder:text-xs placeholder:text-[#646363] ${isDarkMode ? "text-[#646363]  bg-[#060503]" : "bg-white text-black"}  p-2 w-[87vh] border-b-[1px] border-[#858585]`}></textarea>
        </div>
        <button type="submit" className={`bg-[#FFBA00] px-5 py-3 ${isDarkMode ? "text-black" : "text-white"} font-bold text-xs rounded-md flex flex-row items-center gap-4`}>
          <p>Send message</p>
          <div className={`w-[1px] h-[30px] ${isDarkMode ? "bg-black" : "bg-white"}`}></div>
          <MoveRight />
        </button>
      </div>
    )
}

export default Contact