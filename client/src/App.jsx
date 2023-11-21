import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./home/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
