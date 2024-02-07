import React, {useState} from "react";
import "./navAddProgram.css";
import { useLocation, Link } from "react-router-dom";
import InformasiUmum from "./InformasiUmum"
import FotoDetail from "./FotoDetail"

const NavAddProgram = () => {
    const [activeTab, setActiveTab] = useState("InformasiUmum"); // Default tab

    const renderTabContent = () => {
        switch (activeTab) {
            case "InformasiUmum":
                return <InformasiUmum />;
            case "FotoDetail":
                return <FotoDetail />;
            default:
                return <InformasiUmum />;
        }
    }
  return (
    <>
      <div className="navContainer">
        <div className="menu">
          <nav class="nav">
          <a
              className={`nav-link ${activeTab === "InformasiUmum" ? "active" : ""}`}
              onClick={() => setActiveTab("InformasiUmum")}
            >
              Informasi Umum
            </a>
            <a
              className={`nav-link ${activeTab === "FotoDetail" ? "active" : ""}`}
              onClick={() => setActiveTab("FotoDetail")}
            >
              Foto Detail
            </a>
          </nav>
        </div>
      </div>

          <div className="programKonten">
          {renderTabContent()}
      </div>
    </>
  );
};

export default NavAddProgram;
