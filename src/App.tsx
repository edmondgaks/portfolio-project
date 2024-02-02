import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statement from "./pages/Statement";
import SingleImage from "./pages/SingleImage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/artist-statement' element={<Statement /> } />
        <Route path='/gallery/:imageId' element={<SingleImage />} />
      </Routes>
    </Router>
  );
}

export default App;