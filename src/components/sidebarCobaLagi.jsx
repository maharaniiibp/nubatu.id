import React, {useState} from 'react'
import "./sidebarCobaLagi.css"
import { NavLink } from "react-router-dom";
// import homeIcon from "./sidebar/home.svg";
import home from '../pages/home';


function SidebarCobaLagi({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "beranda",
      icon: <img src="./sidebar/home.svg" alt="icon" />
    },
    {
      path: "/koin",
      name: "koin NUsantara",
      icon: <img src="./sidebar/coin.svg" alt="icon" />
    },
    {
      path: "/nderek",
      name: "nderek tanglet",
      icon: <img src="./sidebar/message-notif.svg" alt="icon" />
    },
    {
      path: "/konten",
      name: "konten",
      icon: <img src="./sidebar/book-saved.svg" alt="icon" /> 
    },
    {
      path: "/anggota",
      name: "anggota",
      icon: <img src="./sidebar/profile-2user.svg" alt="icon" /> 
    },
    {
      path: "/pengurus",
      name: "pengurus",
      icon: <img src="./sidebar/people.svg" alt="icon" /> 
    },
    {
      path: "/pengaturan",
      name: "pengaturan",
      icon: <img src="./sidebar/setting.svg" alt="icon" /> 
    }
  ]
  return (
    <>
      <div className="containerSidebarCobaLagi">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
          <div className="topSection">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">LOGO</h1>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
              <img onClick={toggle} src="./sidebar/setting.svg" alt="" />
            </div>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none"}} className="linkText">{item.name}</div>
              </NavLink>
            ))
          }
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default SidebarCobaLagi
