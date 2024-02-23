import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavNderek from "./navnderek";
import { useNavigate } from 'react-router-dom';


const KlikArrow = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showCheckboxes] = useState(true);
  const [rowBackground, setRowBackground] = useState({});
  const [rowFontWeight, setRowFontWeight] = useState({});

  const handleClick = () => {
    navigate('/nderektanglet')
  };

  const handleCheckboxChange = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
      setRowBackground({ ...rowBackground, [rowId]: false });
      setRowFontWeight({ ...rowFontWeight, [rowId]: "normal" });
    } else {
      setSelectedRows([...selectedRows, rowId]);
      setRowBackground({ ...rowBackground, [rowId]: true });
      setRowFontWeight({ ...rowFontWeight, [rowId]: "bold" });
    }
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedRows([]);
      setRowBackground({});
      setRowFontWeight({});
    } else {
      setSelectedRows([1, 2, 3, 4]);
      setRowBackground({ 1: true, 2: true, 3: true, 4: true });
      setRowFontWeight({ 1: "bold", 2: "bold", 3: "bold", 4: "bold" });
    }
    setSelectAll(!selectAll);
  };



  return (
    <div className="py-5">
      <section className="satu">
        <NavNderek />
      </section>

      <section className="dua my-4 mx-4 bg-white rounded p-3">
        <div className="container border-bottom p-2">
          <div className="row row-cols-auto">
            <div className="col">
              <input
                type="checkbox"
                checked={selectAll && showCheckboxes}
                onChange={handleSelectAllChange}
              />
            </div>
            <div className="col">
              <Link to="/nderektanglet">
                <img
                  className="mb-1 mx-2"
                  src="../assets/arrow-down.svg"
                  alt="Arrow Down"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
            <div className="col">
              <img
                className="mb-1"
                src="../assets/arsip.svg"
                alt="arsip"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col">
              <img
                className="mb-1"
                src="../assets/flag.svg"
                alt="flag"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col">
              <img
                className="mb-1"
                src="../assets/garis.png"
                alt="garis"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col">
              <img
                className="mb-1"
                src="../assets/trash.svg"
                alt="trash"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        {/* satu */}
        <div
          className="border-bottom py-4"
          style={{ backgroundColor: rowBackground[1] ? "#EDF6F0" : "" }}
        >
          <div className="container">
            <div className="row row-cols-auto">
              {showCheckboxes && (
                <div className="col">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(1)}
                    onChange={() => handleCheckboxChange(1)}
                  />
                </div>
              )}

              <div className="col">
                <img
                  style={{ width: 47, height: 47 }}
                  src="../assets/yellow.svg"
                  alt="Tanglet Logo"
                />
              </div>
              <div
                className="col"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: rowFontWeight[1] || "normal",
                  color: "#252C32",
                  fontSize: 14,
                }}
              >
                Ziyad Ahmad Baharuddin
                <span
                  style={{
                    color: "#5E7080",
                    fontSize: 12,
                    fontFamily: "Inter",
                    display: "block", // Tampilkan di bawah nama pada perangkat mobile
                  }}
                >
                  ziyadbaharuddin @gmail.com
                </span>
              </div>
              <div
                className="col "
                style={{
                  color: "#252C32",
                  fontWeight: rowFontWeight[1] || "normal",
                  fontSize: 12,
                  fontFamily: "Inter",
                }}
              >
                Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
                menghadi...
              </div>
              <div
                className="col ms-auto"
                style={{
                  color: "#252C32",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: rowFontWeight[1] || "normal",
                  paddingBottom: "20px",
                }}
              >
                Sep 26, 2023
              </div>
            </div>
          </div>
        </div>

        {/* dua */}
        <div
          className="border-bottom py-4"
          style={{ backgroundColor: rowBackground[2] ? "#EDF6F0" : "" }}
        >
          <div className="container">
            <div className="row row-cols-auto">
              {showCheckboxes && (
                <div className="col">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(2)}
                    onChange={() => handleCheckboxChange(2)}
                  />
                </div>
              )}

              <div className="col">
                <img
                  style={{ width: 47, height: 47 }}
                  src="../assets/blue.svg"
                  alt="Tanglet Logo"
                />
              </div>
              <div
                className="col"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: rowFontWeight[2] || "normal",
                  color: "#252C32",
                  fontSize: 14,
                }}
              >
                Zirma Ahmad Baharuddin
                <span
                  style={{
                    color: "#5E7080",
                    fontSize: 12,
                    fontFamily: "Inter",
                    display: "block", // Tampilkan di bawah nama pada perangkat mobile
                  }}
                >
                  zirmabaharuddin @gmail.com
                </span>
              </div>
              <div
                className="col "
                style={{
                  color: "#252C32",
                  fontWeight: rowFontWeight[2] || "normal",
                  fontSize: 12,
                  fontFamily: "Inter",
                }}
              >
                Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
                menghadi...
              </div>
              <div
                className="col ms-auto"
                style={{
                  color: "#252C32",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: rowFontWeight[2] || "normal",
                  paddingBottom: "20px",
                }}
              >
                Sep 26, 2023
              </div>
            </div>
          </div>
        </div>

        {/* tiga */}
        <div
          className="border-bottom py-4"
          style={{ backgroundColor: rowBackground[3] ? "#EDF6F0" : "" }}
        >
          <div className="container">
            <div className="row row-cols-auto">
              {showCheckboxes && (
                <div className="col">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(3)}
                    onChange={() => handleCheckboxChange(3)}
                  />
                </div>
              )}

              <div className="col">
                <img
                  style={{ width: 47, height: 47 }}
                  src="../assets/green.svg"
                  alt="Tanglet Logo"
                />
              </div>
              <div
                className="col"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: rowFontWeight[3] || "normal",
                  color: "#252C32",
                  fontSize: 14,
                }}
              >
                Zahra Ahmad Baharuddin
                <span
                  style={{
                    color: "#5E7080",
                    fontSize: 12,
                    fontFamily: "Inter",
                    display: "block", // Tampilkan di bawah nama pada perangkat mobile
                  }}
                >
                  zahrabaharuddin @gmail.com
                </span>
              </div>
              <div
                className="col "
                style={{
                  color: "#252C32",
                  fontWeight: rowFontWeight[3] || "normal",
                  fontSize: 12,
                  fontFamily: "Inter",
                }}
              >
                Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
                menghadi...
              </div>
              <div
                className="col ms-auto"
                style={{
                  color: "#252C32",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: rowFontWeight[3] || "normal",
                  paddingBottom: "20px",
                }}
              >
                Sep 26, 2023
              </div>
            </div>
          </div>
        </div>

        {/* empat */}
        <div
          className="border-bottom py-4"
          style={{ backgroundColor: rowBackground[4] ? "#EDF6F0" : "" }}
        >
          <div className="container">
            <div className="row row-cols-auto">
              {showCheckboxes && (
                <div className="col">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(4)}
                    onChange={() => handleCheckboxChange(4)}
                  />
                </div>
              )}

              <div className="col">
                <img
                  style={{ width: 47, height: 47 }}
                  src="../assets/purplee.svg"
                  alt="Tanglet Logo"
                />
              </div>
              <div
                className="col"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: rowFontWeight[4] || "normal",
                  color: "#252C32",
                  fontSize: 14,
                }}
              >
                Zalfa Ahmad Baharuddin
                <span
                  style={{
                    color: "#5E7080",
                    fontSize: 12,
                    fontFamily: "Inter",
                    display: "block", // Tampilkan di bawah nama pada perangkat mobile
                  }}
                >
                  zalfabaharuddin @gmail.com
                </span>
              </div>
              <div
                className="col "
                style={{
                  color: "#252C32",
                  fontWeight: rowFontWeight[4] || "normal",
                  fontSize: 12,
                  fontFamily: "Inter",
                }}
              >
                Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
                menghadi...
              </div>
              <div
                className="col ms-auto"
                style={{
                  color: "#252C32",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: rowFontWeight[1] || "normal",
                  paddingBottom: "20px",
                }}
              >
                Sep 26, 2023
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4 fw-bolder">
          <div
            class="col-auto me-auto"
            style={{
              color: "#344054",
              fontSize: 14,
              fontFamily: "Inter",
            }}
          >
            Page 1 of 1
          </div>
          <div
      className="col-auto mx-2 border border-secondary rounded p-2"
      style={{
        color: "#344054",
        fontSize: 14,
        fontFamily: "Inter",
        cursor: "pointer" 
      }}
      onClick={handleClick} 
    >
      Previous
    </div>
          <div
            className="col-auto mx-2 border border-secondary rounded p-2"
            style={{
              color: "#344054",
              fontSize: 14,
              fontFamily: "Inter",
            }}
          >
            Next
          </div>
        </div>
      </section>
      <div className="py-5"></div>
    </div>
  );
};

export default KlikArrow;
