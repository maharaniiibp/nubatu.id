import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Koin from "./pages/koin"
import Nderek from "./pages/nderek"
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

function App() {
  return (
    <div className="App">
    <div id="signInDiv">
          {/* Konten apa pun di sini */}
        </div>
      <Sidebar>
        <Navbar/>
        <Routes>
        <Route path="/" Component={Login} />
        <Route path="/koin" Component={Koin} />
        <Route path="/nderek" Component={Nderek} />
        <Route path="/konten" Component={Konten} />
        <Route path="/anggota" Component={Anggota} />
        <Route path="/pengurus" Component={Pengurus} />
        <Route path="/pengaturan" Component={Pengaturan} />
        <Route path="/addProgram" Component={AddProgram} />
        <Route path="/donatur" Component={Donatur} />
        <Route path="/beranda" Component={Beranda} />
        <Route path="/nderektanglet" Component={Nderektanglet} />
        </Routes>
        </Sidebar>
      </div>
  );
}

export default App;
