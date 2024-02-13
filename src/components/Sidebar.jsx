import React, { useState } from "react";
import "./css/sidebar.css";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { red } from "@mui/material/colors";

function SidebarCobaLagi({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // =======================================
  const [dropdownStates, setDropdownStates] = useState({});
  const toggleDropdown = (index) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const menuItem = [
    {
      path: "/beranda",
      name: "beranda",
      icon: <img src="./sidebar/home.svg" alt="icon" />,
    },
    {
      name: "koin NUsantara",
      icon: <img src="./sidebar/coin.svg" alt="icon" />,
      subItems: [
        {
          path: "/koin",
          name: "Campaign Program",
          icon: <img src="./sidebar/dot.svg" alt="icon" />,
        },
        {
          path: "/donatur",
          name: "Donatur",
          icon: <img src="./sidebar/dot.svg" alt="icon" />,
        },
      ],
    },
    {
      path: "/nderektanglet",
      name: "nderek tanglet",
      icon: <img src="./sidebar/message-notif.svg" alt="icon" />,
    },
    {
      name: "konten",
      icon: <img src="./sidebar/book-saved.svg" alt="icon" />,
      subItems: [
        {
          path: "/konten",
          name: "Berita",
          icon: <img src="./sidebar/dot.svg" alt="icon" />,
        },
        {
          path: "/artikel",
          name: "Artikel",
          icon: <img src="./sidebar/dot.svg" alt="icon" />,
        },
        {
          path: "/events",
          name: "Event",
          icon: <img src="./sidebar/dot.svg" alt="icon" />,
        },
        {
          path: "/ads",
          name: "Partnership/Ads",
          icon: <img src="./sidebar/dot.svg" alt="icon" />,
        },
      ],
    },
    {
      path: "/anggota",
      name: "anggota",
      icon: <img src="./sidebar/profile-2user.svg" alt="icon" />,
    },
    {
      path: "/pengurus",
      name: "pengurus",
      icon: <img src="./sidebar/people.svg" alt="icon" />,
    },
    {
      path: "/pengaturan",
      name: "pengaturan",
      icon: <img src="./sidebar/setting.svg" alt="icon" />,
    },
  ];
  return (
    <>
      <div className="containerSidebarCobaLagi">
        <div style={{ maxWidth: isOpen ? "250px" : "70px" }} className="sidebar">
          <div
            style={{
              display: "flex",
              justifyContent: isOpen ? "start" : "start",
              marginLeft: "5px",
              marginBottom: isOpen ? "0" : "93px",
            }}
            className="bars"
          >
            <HiOutlineBars3 onClick={toggle} />
          </div>
          <div className="logo" style={{ display: isOpen ? "flex" : "none" }}>
            <img src="./sidebar/PCNU-Logo.svg" alt="" />
            <img src="./sidebar/NU-Logo.svg" alt="" />
          </div>

          {menuItem.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <>
                  <div
                    style={{
                      justifyContent: isOpen ? "start" : "start",
                      display: "flex",
                    }}
                    className="link"
                    onClick={() => toggleDropdown(index)}
                  >
                    <div
                      style={{
                        justifyContent: isOpen ? "start" : "center",
                        display: "flex",
                      }}
                      className="icon"
                    >
                      {item.icon}
                    </div>
                    <div
                      style={{ display: isOpen ? "block" : "none" }}
                      className="linkText"
                    >
                      {item.name}
                    </div>
                  </div>
                  <div
                    style={{
                      display: dropdownStates[index] ? "block" : "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink
                        to={subItem.path}
                        key={subIndex}
                        className="subLink"
                        activeClassName="activeSub"
                      >
                        <div className="icon">{subItem.icon}</div>
                        <div
                          style={{
                            display: isOpen ? "block" : "none" }}
                          className="linkText"
                        >
                          {subItem.name}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="linkText"
                  >
                    {item.name}
                  </div>
                </NavLink>
              )}
            </div>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default SidebarCobaLagi;
