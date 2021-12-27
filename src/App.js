import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import GCD from "./pages/calcGcdPage"
import GradeCalc from "./pages/calcGradePage";
import SetCalc from "./pages/setPage";
function App() {
  return (
    <Router>
      <div className="container">
        <div className="header"> 
        Number Theory Calculator
        </div>
        <div className="nav">
          {" "}
          <Sidebar />{" "}
        </div>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/gcd" element={<GCD/>}/>
            <Route path="/sets" element={<SetCalc/>}/>
            <Route path="/finalgrade" element={<GradeCalc/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
