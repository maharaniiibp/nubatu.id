import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Koin from "./pages/koin";
import Konten from "./pages/konten";
import Artikel from "./pages/artikel";
import Anggota from "./pages/anggota";
import Pengurus from "./pages/pengurus";
import Pengaturan from "./pages/pengaturan";

import Login from "./pages/login";
import Beranda from "./pages/beranda";
import Nderektanglet from "./pages/nderektanglet";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import AddProgram from "./pages/addProgram";
import FotoDetail from "./components/koin nusantara/Campaign Program/FotoDetail";
// import AddProgram from "./components/koin nusantara/Campaign Program/addProgram";
import Donatur from "./pages/donatur";
// import Donatur from "./components/koin nusantara/Donatur/Donatur";
import AddBerita from "./pages/addBerita";
// import AddBerita from "./components/Konten/Berita/addBerita";
import Events from "./components/Konten/Event/events";
import Addevents from "./components/Konten/Event/addevents";
import Edit from "./components/Konten/Event/edit";
import Klikarrow from "./components/nderek tanglet/klikarrow";
import Search from "./components/nderek tanglet/search";
import Detailchat from "./components/nderek tanglet/detailchat";
import Editjawaban from "./components/nderek tanglet/editjawaban";




function App() {
  const currentPath = window.location.pathname;

  const isLoginPage = currentPath === "/";
  return (
    <div className="App">
      {isLoginPage ? (
        <Login />
      ) : (
        <Sidebar>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/koin" element={<Koin />} />
            <Route path="/nderek" element={<Nderektanglet />} />
            <Route path="/konten" element={<Konten />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/anggota" element={<Anggota />} />
            <Route path="/pengurus" element={<Pengurus />} />
            <Route path="/pengaturan" element={<Pengaturan />} />
            <Route path="/addProgram" element={<AddProgram />} />
            <Route path="/fotoDetail" element={<FotoDetail />} />
            <Route path="/donatur" element={<Donatur />} />
            <Route path="/addBerita" element={<AddBerita />} />
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/nderektanglet" element={<Nderektanglet />} />
            <Route path="/events" element={<Events />} />
            <Route path="/addevents" element={<Addevents />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/klikarrow" element={<Klikarrow />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detailchat" element={<Detailchat />} />
            <Route path="/editjawaban" element={<Editjawaban />} />
            


          </Routes>
        </Sidebar>
      )}
    </div>
  );
}

export default App;
