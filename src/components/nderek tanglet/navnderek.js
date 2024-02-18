import React, { useState } from "react";
import { Link } from 'react-router-dom';

const NavNderek = () => {
    const [activeTab, setActiveTab] = useState("inbox"); // Inisialisasi activeTab dengan nilai "inbox" untuk mengaktifkan tab Kotak Masuk
  
    const handleClick = (tabName) => {
      setActiveTab(tabName);
    };
  
    return (
      <div>
        <style>
          {`
            body {
              background-color: #EDF6F0;
              margin: 0;
              padding: 0;
            }
          `}
        </style>
  
        <section className="satu mx-4">
          <div className="d-flex mb-3  ">
            <div
              style={{
                color: "black",
                fontSize: 36,
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Nderek Tanglet
            </div>
            <div className="ms-auto" style={{ alignSelf: "flex-start" }}>
              <img
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 50,
                  border: "3px #009B4C solid",
                }}
                src="../assets/tanglet.svg"
                alt="Tanglet Logo"
              />
            </div>
          </div>
        </section>
  
        <section className="dua mx-4 py-4">
          <div className="row">
            {/* satu */}
            <div className="col-auto">
              <div
                style={{ cursor: "pointer", fontSize: "14px" }}
                className={`px-4 ${
                  activeTab === "inbox"
                    ? "border border-success rounded p-2 fw-bold"
                    : ""
                }`}
                onClick={() => handleClick("inbox")}
              >
                Kotak Masuk
              </div>
            </div>
            {/* dua */}
            <div className="col-auto">
              <div
                style={{ cursor: "pointer", fontSize: "14px" }}
                className={`px-4 ${
                  activeTab === "tunda"
                    ? "border border-success rounded p-2 fw-bold"
                    : ""
                }`}
                onClick={() => handleClick("tunda")}
              >
                Tunda
              </div>
            </div>
            {/* tiga */}
            <div className="col-auto">
              <div
                style={{ cursor: "pointer", fontSize: "14px" }}
                className={`px-4 ${
                  activeTab === "dibales"
                    ? "border border-success rounded p-2 fw-bold"
                    : ""
                }`}
                onClick={() => handleClick("dibales")}
              >
                Dibales
              </div>
            </div>
            {/* empat */}
            <div className="col-auto">
              <div
                style={{ cursor: "pointer", fontSize: "14px" }}
                className={`px-4 ${
                  activeTab === "arsip"
                    ? "border border-success rounded p-2 fw-bold"
                    : ""
                }`}
                onClick={() => handleClick("arsip")}
              >
                Arsip
              </div>
            </div>
            {/* lima */}
            <div className="col-auto ms-auto">
  <Link to="/search">
    <div
      style={{ cursor: "pointer", fontSize: "12px" }}
      className="border border-success rounded p-2 d-flex align-items-center"
    >
      <span className="mr-2 me-2 text-black fw-bold">Pencarian</span>
      <img
        style={{
          width: 20,
          height: 20,
        }}
        src="../assets/search.svg"
        alt="Search Icon"
      />
    </div>
  </Link>
</div>

          </div>
        </section>
      </div>
    );
  };

export default NavNderek;
