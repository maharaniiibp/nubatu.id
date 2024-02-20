import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./css/donatur.css";
import Donatur from "../components/koin nusantara/Donatur/Donatur";

const donatur = () => {
  return (
    <>
      <div className="donatur">
        <div className="donaturNav">
          <div className="navKiri">
            <div className="pageName">
              <p>Koin</p>
            </div>
          </div>

          <div className="navKanan">
            <div className="account">
              <img src="./sidebar/profil.svg" alt="Me" className="photo" />
            </div>
          </div>
        </div>

        <div className="">
          <Donatur />
        </div>
      </div>
    </>
  );
};

export default donatur;
