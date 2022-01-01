import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GCD from "./pages/gcd"
import GradeCalc from "./pages/grade";
import SetCalc from "./pages/sets";
import Calcmodulo from "./pages/modulo";
import Calcdivisors from "./pages/divisors";
import CalcPfs from "./pages/pf";

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
            <Route path="/mod" element={<Calcmodulo/>}/>
            <Route path="/divisors" element={<Calcdivisors/>}/>
            <Route path="/factorization" element={<CalcPfs/>}/>
            <Route path="/finalgrade" element={<GradeCalc/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
