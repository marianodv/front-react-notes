import Home from "./Pages/Home"
import Alta from "./Pages/Alta"
import NotFound from "./Pages/NotFound"
import Menu from "./Components/Menu"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alta" element={<Alta />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>        
  );
}

export default App; 
