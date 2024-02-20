import React from 'react'
import Berita from "../components/Konten/Berita/Berita"
import { Link } from "react-router-dom";
import "./css/konten.css"


const Konten = () => {
  return (
      <>
      <div className="konten">
      <div className="kontenNav">
          <div className="navKiri">
            <div className="pageName">
              <p>Berita</p>
            </div>
          </div>

          <div className="navKanan">
            
          <Link to="/addBerita">
              <button className="addProgram">
                Tambah Berita
                <img src="./koinNusantara/plus.svg" alt="" />
              </button>
            </Link>

            <div className="account">
              <img src="./sidebar/profil.svg" alt="Me" className="photo" />
            </div>
          </div>
        </div>

        <div>
        <Berita />
        </div>
  </div>
      </>
  )
}

export default Konten