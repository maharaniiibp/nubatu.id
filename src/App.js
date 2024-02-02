import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Beranda from "./pages/beranda";
import Nderektanglet from "./pages/nderektanglet";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="signInDiv">
          {/* Konten apa pun di sini */}
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/nderektanglet" element={<Nderektanglet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
