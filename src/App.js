import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Home from "./pages/home"
import Koin from "./pages/koin"
import Nderek from "./pages/nderek"
import Konten from "./pages/konten"
import Anggota from "./pages/anggota"
import Pengurus from "./pages/pengurus"
import Pengaturan from "./pages/pengaturan"

import Navbar from "./components/Navbar"
import AddProgram from "./components/koin nusantara/Campaign Program/addProgram"

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Navbar/>
         <Routes>
        <Route path="/" Component={Home} />
        <Route path="/koin" Component={Koin} />
        <Route path="/nderek" Component={Nderek} />
        <Route path="/konten" Component={Konten} />
        <Route path="/anggota" Component={Anggota} />
        <Route path="/pengurus" Component={Pengurus} />
        <Route path="/pengaturan" Component={Pengaturan} />
        <Route path="/addProgram" Component={AddProgram} />
        </Routes>
        </Sidebar>
      </div>
  );
}

export default App;
