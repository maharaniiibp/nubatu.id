import React, { useState } from "react";
import Tabeltanglet from "../components/tabeltanglet";

const NderekTanglet = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: #EDF6F0;
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <section className="satu">
        <div className="d-flex mb-3 p-4">
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
          <div className="ms-auto">
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

      <section className="dua">
        <div className="d-flex mb-5" style={{ marginLeft: "20px" }}>
          <div
            style={{ cursor: "pointer" }}
            className={`px-4 ${
              activeTab === "inbox"
                ? "border border-success rounded p-2 fw-bold"
                : ""
            }`}
            onClick={() => handleClick("inbox")}
          >
            Kotak Masuk
          </div>
          <div
            style={{ cursor: "pointer" }}
            className={`px-4 ${
              activeTab === "tunda"
                ? "border border-success rounded p-2 fw-bold"
                : ""
            }`}
            onClick={() => handleClick("tunda")}
          >
            Tunda
          </div>
          <div
            style={{ cursor: "pointer" }}
            className={`px-4 ${
              activeTab === "dibales"
                ? "border border-success rounded p-2 fw-bold"
                : ""
            }`}
            onClick={() => handleClick("dibales")}
          >
            Dibales
          </div>
          <div
            style={{ cursor: "pointer" }}
            className={`px-4 ${
              activeTab === "arsip"
                ? "border border-success rounded p-2 fw-bold"
                : ""
            }`}
            onClick={() => handleClick("arsip")}
          >
            Arsip
          </div>
          <div
            style={{ cursor: "pointer", marginLeft: "55%" }}
            className="border border-success rounded p-2 px-8 d-flex align-items-center"
          >
            <span className="me-2 fw-bold">Pencarian</span>
            <img
              style={{
                width: 20,
                height: 20,
              }}
              src="../assets/search.svg"
              alt="Search Icon"
            />
          </div>
        </div>
      </section>

     <section className="tiga">
          <Tabeltanglet/>
     </section>
    </>
  );
};

export default NderekTanglet;
