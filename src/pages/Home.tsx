import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';

const Home = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`h-full flex flex-col w-full ${isDarkMode ? 'bg-[#0C0C0C] shadow-lg backdrop-blur-md' : 'bg-[#FFFDFB]'}`}>
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Contact />
            <Navbar />
        </div>
    )
}

export default Home