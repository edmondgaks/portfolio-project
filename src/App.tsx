import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statement from "./pages/Statement";


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/artist-statement' element={<Statement /> } />
      </Routes>
    </Router>
  );
}

export default App;