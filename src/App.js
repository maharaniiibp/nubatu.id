import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import beranda from "./pages/beranda";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="signInDiv">
          {/* Konten apa pun di sini */}
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/beranda" element={<beranda />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
