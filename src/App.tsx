import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Hero from './components/Hero';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';


function App() {
  
  const { isDarkMode } = useTheme();

  return (
    <div className={`h-full w-full ${isDarkMode ? 'bg-[#0C0C0C] shadow-lg backdrop-blur-md' : 'bg-[#FFFDFB]'}`}>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;