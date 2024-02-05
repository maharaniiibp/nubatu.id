import React from "react";
import "./css/navbar.css";
import { useLocation, Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let pageName = "";
  switch (pathname) {
    case "/":
      pageName = "Beranda";
      break;
    case "/koin":
      pageName = "Program";
      break;
    case "/nderek":
      pageName = "Nderek tanglet";
      break;
    case "/konten":
      pageName = "Konten";
      break;
    case "/anggota":
      pageName = "Anggota";
      break;
    case "/pengurus":
      pageName = "Pengurus";
      break;
    case "/pengaturan":
      pageName = "Pengaturan";
      break;
    default:
      pageName = "";
      break;
  }

  // navbar campaign Program
  const isButtonVisible = pathname === "/koin";
  // Tentukan kondisi untuk menentukan apakah harus menampilkan isi Navbar atau tidak
  const isKoinNav = pathname == "/koin";
  const isAddProgramNav = pathname == "/addProgram";
  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          {/* Nav nya KOIN  */}
          {isKoinNav && (
            <>
              <div className="navKiri">
                <div className="pageName">
                  <p>{pageName}</p>
                </div>
              </div>

              <div className="navKanan">
                <Link to="/addProgram">
                  <button className="addProgram">
                    Tambah Program
                    <img src="./koinNusantara/plus.svg" alt="" />
                  </button>
                </Link>

                <div className="account">
                  <img src="./sidebar/profil.svg" alt="Me" className="photo" />
                </div>
              </div>
            </>
          )}

          {/* Nav nya ADD PROGRAM  */}
          {isAddProgramNav && (
            <>
              <div className="navKiri">
                <div className="pageName">
                  <img className="arrowLeft" src="./sidebar/arrow-left.svg" alt="" />
                  <span>Kembali</span>
                </div>
              </div>

              <div className="navKanan">
                <Link to="">
                  <button className="simpanPengajuan">
                   Simpan Pengajuan
                  </button>
                </Link>
                <Link to="">
                  <button className="verifikasiProgram">
                    Verifikasi Program
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
