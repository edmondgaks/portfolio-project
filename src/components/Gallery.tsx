const Gallery = () => {
    return (
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
    )
}

export default Gallery