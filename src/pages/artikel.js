import React from 'react'
import Artikel from "../components/Konten/Artikel/Artikel"
import "./css/artikel.css"

const artikel = () => {
  return (
    <>
      <div className="artikel">
      <div className="artikelNav">
          <div className="navKiri">
            <div className="pageName">
              <p>Artikel</p>
            </div>
          </div>

          <div className="navKanan">
            <div className="account">
              <img src="./sidebar/profil.svg" alt="Me" className="photo" />
            </div>
          </div>
        </div>

        <Artikel />
        </div>
      </>
  )
}

export default artikel