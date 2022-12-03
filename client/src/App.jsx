import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Livraria from "./pages/Livraria";
import { LivroProvider } from "./components/LivroContext";
import { RatingProvider } from "./components/RatingContext";

function App() {
  return (
    <LivroProvider>
      <RatingProvider>
        <Router>
          <div className="pt-20 overflow-y-hidden w-screen h-screen  ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/livraria" element={<Livraria />} />
            </Routes>
          </div>
        </Router>
      </RatingProvider>
    </LivroProvider>
  );
}

export default App;
