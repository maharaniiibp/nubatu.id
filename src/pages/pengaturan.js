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
            }}
          >
            Setting
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


      


     
    </>
  );
};

export default NderekTanglet;
