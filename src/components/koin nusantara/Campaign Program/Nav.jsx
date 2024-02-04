import React from 'react'
import "./campaignProgram.css";
import dataTable from "../../../data/campaign.json";

const Nav = ({menuItems, filterItems, setItems}) => {
  return (
      <>
          {/* {
              menuItems.map(val => (
                  <button onClick={() => filterItems(val)}>
                      {val}
                  </button>
              ))
          }
           <button onClick={() => setItems(dataTable)}>
                     All
          </button> */}
          

       <div className="navContainer">
            <div className="menu">
              <nav class="nav">
                <a class="nav-link active" aria-current="page" href="#">
                  Campaign Program
                </a>
                <a class="nav-link" href="#">
                  Disetujui
                </a>
                <a class="nav-link" href="#">
                  Pengajuan
                </a>
                <a class="nav-link" href="#">
                  Ditolak
                </a>
              </nav>
              <div className="search">
                <span>Pencarian</span>
                <img src="./koinNusantara/search-normal.svg" alt="" />
              </div>
            </div>
          </div>
      </>
  )
}

export default Nav