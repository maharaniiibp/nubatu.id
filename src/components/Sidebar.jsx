import React, { useState, useEffect } from "react";
import "./css/sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Icon
import DashboardIcon from "@mui/icons-material/Dashboard";
import { sidebarData } from "./sidebarData";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";

function Sidebar() {
  const [activePage, setActivePage] = useState('/');

  useEffect(() => {
    const path = window.location.pathname;
    setActivePage(path);
  }, []);

  // const [navCollapse, setNavCollapse] = useState(false);
  // const [smallNavCollapse, setSmallNavCollapse] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img src="./sidebar/PCNU-Logo.svg" alt="" />
          <img src="./sidebar/NU-Logo.svg" alt="" />
        </div>
        <div className="bottom">
          <ul>
            <li>
              <img className="icon" src="./sidebar/home.svg" alt="" />
              <Nav.Link href="/home">Beranda</Nav.Link>
              <span></span>
            </li>
            <li>
              <img className="icon" src="./sidebar/coin.svg" alt="" />
              <Nav.Link href="/koin">Koin NUsantara</Nav.Link>
              {/* <span>Koin Nusantara</span> */}
            </li>
            <li>
              <img className="icon" src="./sidebar/message-notif.svg" alt="" />
              <Nav.Link href="/nderek">Nderek Tanglet</Nav.Link>
              {/* <span>Nderek Tanglet</span> */}
            </li>
            <li>
              <img className="icon" src="./sidebar/book-saved.svg" alt="" />
              <Nav.Link href="/konten">Konten</Nav.Link>
              {/* <span>Konten</span> */}
            </li>
            <li>
              <img className="icon" src="./sidebar/people.svg" alt="" />
              <Nav.Link href="/home">Anggota</Nav.Link>
              {/* <span>Anggota</span> */}
            </li>
            <li>
              <img className="icon" src="./sidebar/profile-2user.svg" alt="" />
              <Nav.Link href="/pengurus">Pengurus</Nav.Link>
              {/* <span>Pengurus</span> */}
            </li>
            <li>
              <img className="icon" src="./sidebar/setting.svg" alt="" />
              <Nav.Link href="/pengaturan">Pengaturan</Nav.Link>
              {/* <span>Pengaturan</span> */}
            </li>
          </ul>
        </div>
      </div>

      {/* ========================================================= */}
      {/* <div className="sidebar">
          <div className="bar">
            <i className="bi bi-justify largeDeviceIcon" onClick={e => setNavCollapse(!navCollapse)}></i>
            <i className="bi bi-justify smallDeviceIcon" onClick={e => setSmallNavCollapse(!smallNavCollapse)}></i>
            </div>

          <div className="sidebar-content">
          <div className={`${smallNavCollapse ? "smallNav" : ""} sidebar-container ${navCollapse ? "navCollapse" : ""}`}>
        <div className="nav-option option1">
          <i className="bi bi-speedometer2"></i>
          <h3>Dashboard</h3>
        </div>
        <div className="nav-option option1">
          <i className="bi bi-clipboard-pulse"></i>
          <h3>Articles</h3>
        </div>
        <div className="nav-option option1">
          <i className="bi bi-chat-square-text"></i>
          <h3>Report</h3>
        </div>
        <div className="nav-option option1">
          <i className="bi bi-gear"></i>
          <h3>Setting</h3>
        </div>
        <div className="nav-option option1">
          <i className="bi bi-power"></i>
          <h3>Logout</h3>
        </div>

        </div>
          </div>
        </div> */}

      {/* ====================================== */}
      {/* <div className="sidebar">
        <ul className="sidebarList">
          {sidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon" className="icon">
                  {val.icon}
                </div>
                <img id="icon" className="icon" src={val.icon} alt={val.title} />
                <div id="title" className="title">
                  {val.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
    </>
  );
}

export default Sidebar;
