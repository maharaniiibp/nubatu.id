import React from 'react'
import "./css/home.css"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Campaign from "../components/koin nusantara/Campaign Program/CampaignProgram"

const home = () => {
  return (
    <>
      <div className="home">
      <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="campaign">
            <Campaign />
          </div>
       </div>
        </div>
      </>
  )
}

export default home