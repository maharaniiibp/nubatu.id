import React, { useState } from "react";
import "./css/koin.css"
import Campaign from "../components/koin nusantara/Campaign Program/CampaignProgram";
import { Link } from "react-router-dom";
const Koin = () => {
  // NAV

  return (
    <>
      <div className="koinNusantara">
        
        <div className="koinNav">
          <div className="navKiri">
            <div className="pageName">
              <p>Koin</p>
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
        </div>

      </div>
      <div className="campaign">
        <Campaign />
      </div>
    </>
  );
};

export default Koin;
