import React from 'react'
import "./css/navbar.css"

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <div className="pageName">
            <p>Beranda</p>
          </div>
          <div className="account">
              <img src="./sidebar/profil.svg" alt="Me" className='photo'/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
