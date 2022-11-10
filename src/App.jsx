import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Livraria from "./pages/Livraria";

function App() {
  return (
    <Router>
      <div className="pt-20 overflow-x-hidden ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livraria" element={<Livraria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
