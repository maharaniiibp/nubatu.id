import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar"
// <<<<<<< yasmin
// =======
// import Home from "./pages/home"
// >>>>>>> main
import Koin from "./pages/koin"
// import Nderek from "./pages/nderek"
import Konten from "./pages/konten"
import Anggota from "./pages/anggota"
import Pengurus from "./pages/pengurus"
import Pengaturan from "./pages/pengaturan"
    
import Login from './pages/login';
import Beranda from "./pages/beranda";
import Nderektanglet from "./pages/nderektanglet";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar"
import AddProgram from "./components/koin nusantara/Campaign Program/addProgram"
import Donatur from "./components/koin nusantara/Donatur/Donatur"
import AddBerita from "./components/Konten/Berita/addBerita"
// import AddBerita from "./components/Konten/Berita/addBerita"

function App() {
  const currentPath = window.location.pathname;

  // Cek apakah halaman login
  const isLoginPage = currentPath === "/";
  return (
    <div className="App">
    {isLoginPage ? (
      // Tampilkan halaman login
      <Login />
    ) : (
      // Tampilkan sidebar dan navbar hanya untuk halaman selain login
      <Sidebar>
        <Navbar />
        <Routes>
// <<<<<<< yasmin
          <Route path="/koin" element={<Koin />} />
          <Route path="/nderek" element={<Nderek />} />
          <Route path="/konten" element={<Konten />} />
          <Route path="/anggota" element={<Anggota />} />
          <Route path="/pengurus" element={<Pengurus />} />
          <Route path="/pengaturan" element={<Pengaturan />} />
          <Route path="/addProgram" element={<AddProgram />} />
          <Route path="/donatur" element={<Donatur />} />
          <Route path="/addBerita" element={<AddBerita />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/nderektanglet" element={<Nderektanglet />} />
// =======
//         <Route path="/" Component={Login} />
//         <Route path="/beranda" Component={Beranda} />
//         <Route path="/koin" Component={Koin} />
//         <Route path="/nderektanglet" Component={Nderektanglet} />
//         <Route path="/konten" Component={Konten} />
//         <Route path="/anggota" Component={Anggota} />
//         <Route path="/pengurus" Component={Pengurus} />
//         <Route path="/pengaturan" Component={Pengaturan} />
//         <Route path="/addProgram" Component={AddProgram} />
//         <Route path="/donatur" Component={Donatur} />
// >>>>>>> main
        </Routes>
      </Sidebar>
    )}
  </div>
  );
}

export default App;
