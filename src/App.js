import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import GradeCalc from "./pages/calcGradePage";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header"> </div>
        <div className="nav">
          {" "}
          <Sidebar />{" "}
        </div>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/finalgrade" element={<GradeCalc/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
