
import { Sun } from 'lucide-react'
import './App.css'

function App() {

  return (
    <div className="h-full w-full">
      <div className="h-[10vh] shadow-md w-full flex flex-row items-center justify-around">
        <p className="text-base font-sans font-light text-[#FFFFFF99]">ABOUT ME</p>
        <p className="text-base font-sans font-light text-[#FFFFFF99]">WORKS</p>
        <p className="text-xl font-semibold perpetua -ml-12">RANDY SIMONY</p>
        <p className="text-base font-sans font-light text-[#FFFFFF99]">CONTACT</p>
        <div>
          <Sun size={18} />
        </div>
      </div>
    </div>
  )
}

export default App
