import Navbar from "../components/Navbar"
import { useTheme } from "../context/ThemeContext";

const Statement = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`h-[100vh] flex flex-col w-full ${isDarkMode ? 'bg-[#0C0C0C] shadow-lg backdrop-blur-md' : 'bg-[#FFFDFB]'}`}> 
            <Navbar />
            <div className="w-full h-[90vh] flex items-center" style={{
                background: "url('/statement-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat", 
            }}>
                <div className="w-[80%] mx-auto bg-[#21180D] flex flex-row justify-between h-[80vh]">
                    <img src="/madoc.png" alt="owner" className=""  />
                    <div className="p-10 text-xs flex flex-col gap-5">
                        <p>In the alchemy of my art, I seek to	map the uncharted territories of the human experience. Blank sheets	become the liminal spaces where thoughts are given volume and emotions are rendered in a spectrum of colors that echo the complexity of	feeling and the resonance of mental states. I labor to give shape to the	shapeless-to fashion a visual lexicon for the ineffable nuances of consciousness</p>
                        <p>My process is a pilgrimage through layers of abstraction. It begins with the 		precision of Micron pens, which lay down the skeletal outlines of loose but 		calculated composition. I subject these sketches to a digital metamorphosis that 	stretches and extends concepts to their absolute limits. Codified inputs and manipulation evolve into an extension of my linework. </p>
                        <p>A pixelated hive mind	becomes my interlocutor and amidst the clash of our two dimensions, previously hidden form is discovered and extracted in ways that almost seem impossible.	By merging and manipulating these buzzing bio-technological landscapes within the digital realm, I compose a symphony of forms that blur the lines between the virtual and the real, the conscious and the subconscious.</p>
                        <p>These works, like echoes in a void, attempt to visualize the vibrations of thought and the frequency of feeling. They are both the echo and the source, the question and the answer. They reside in the interstices of understanding, wavering between what is known and the vast expanse of the unknown.</p>
                        <p>As an artist, I am driven by the pursuit of the intangible, conjuring forth the abstracted realities that dwell just beyond the periphery of perception. My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the intangible, and to find solace in the shared quest to understand the immeasurable dimensions of being.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statement