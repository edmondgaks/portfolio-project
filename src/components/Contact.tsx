const Contact = () => {
    return (
        <div className={`flex gap-4 mt-10 flex-col justify-around items-center`}>
        <h1 className="perpetua text-3xl font-medium">CONTACT <span className="text-[#ffba00]">ME</span></h1>
        <p className="font-sans text-center w-[60%] text-sm text-[#C7C5C2] placeholder:text-xs font-light">My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the intangible, and to find solace in the shared quest to understand the immeasurable dimensions of being.</p>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Fullname:</p>
            <input type="text" placeholder="John Doe |" className="p-3 w-[40vh] placeholder:text-xs border-b-[1px] text-[#646363] border-[#858585] bg-[#060503]" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Email:</p>
            <input type="text" placeholder="example@gmail.com" className="p-3 placeholder:text-xs placeholder:text-[#646363] w-[40vh] border-b-[1px] border-[#858585] bg-[#060503]" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">Contact Phone:</p>
            <input type="text" placeholder="eg: 1123-419-345" className="p-3 placeholder:text-xs w-[40vh] border-b-[1px] placeholder:text-[#646363] border-[#858585] bg-[#060503]" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#FFBA00] font-medium font-sans">City/Town:</p>
            <input type="text" placeholder="eg: California" className="p-3 placeholder:text-xs placeholder:text-[#646363] w-[40vh] border-b-[1px] border-[#858585] bg-[#060503]" />
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-2">
        <p className="text-sm text-[#FFBA00] font-medium font-sans">Message:</p>
          <textarea placeholder="Write your message" className="placeholder:text-xs placeholder:text-[#646363] p-2 w-[87vh] border-b-[1px] border-[#858585] bg-[#060503]"></textarea>
        </div>
      </div>
    )
}

export default Contact