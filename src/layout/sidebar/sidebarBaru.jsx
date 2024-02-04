import React from 'react'
import "./sidebar.css"
const SidebarBaru = () => {
  return (
    <>
      <div className="sidebar">
        <div className="user-info">
          <div className="info-img img-fit-cover">
            <img src="./" alt="foto" />
          </div>
          <span className="info-name">Alice Doe</span>
        </div>
        <nav className='navigation'>
          <ul className="nav-list"></ul>
        </nav>
    </div>
    </>
  )
}

export default SidebarBaru