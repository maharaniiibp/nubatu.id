import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showCheckboxes, ] = useState(true);
  const [rowBackground, setRowBackground] = useState({});
  const [rowFontWeight, setRowFontWeight] = useState({});
  const originalRows = [
    { id: 1, name: "Ziyad Ahmad Baharuddin", email: "ziyadbaharuddin@gmail.com", content: "Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...", date: "Sep 26, 2023" },
    { id: 2, name: "Zirma Ahmad Baharuddin", email: "zirmabaharuddin@gmail.com", content: "Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...", date: "Sep 26, 2023" },
    { id: 3, name: "Zahra Ahmad Baharuddin", email: "zahrabaharuddin@gmail.com", content: "Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...", date: "Sep 26, 2023" },
    { id: 4, name: "Zalfa Ahmad Baharuddin", email: "zalfabaharuddin@gmail.com", content: "Izin bertanya pak kiai, katanya boleh tidak seorang Muslim menghadi...", date: "Sep 26, 2023" }
  ];

  useEffect(() => {
    setSearchResults(originalRows);
  }, []);

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
      setSelectedRows(originalRows.map(row => row.id));
      setRowBackground(originalRows.reduce((acc, curr) => {
        acc[curr.id] = true;
        return acc;
      }, {}));
      setRowFontWeight(originalRows.reduce((acc, curr) => {
        acc[curr.id] = "bold";
        return acc;
      }, {}));
    }
    setSelectAll(!selectAll);
  };

  const handleRefreshClick = () => {
    window.location.reload();
  };

  const handleSearch = (query) => {
    const filteredRows = originalRows.filter((row) =>
      row.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredRows);
  };

  return (
    <div className="py-5">
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

      <section className="dua py-4">
        <div className="row mx-3">
          <div className="input-group">
            <input
              type="search"
              id="form2Example18"
              className="bg-white form-control form-control-lg fs-6"
              style={{ border: "none" }}
              placeholder="Ketik sesuatu untuk dicari..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <Link to="/nderektanglet">
            <button className="btn rounded bg-white" type="button">
              <img src="../assets/close.svg" alt="close" />
            </button>
            </Link>
           
          </div>
        </div>
      </section>

      <section className="tiga my-4 mx-4 bg-white rounded p-3">
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
              <Link to="/klikarrow">
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
                src="../assets/refresh.svg"
                alt="Refresh"
                onClick={handleRefreshClick}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        {searchResults.map((row) => (
          <div
            key={row.id}
            className="border-bottom py-4"
            style={{ backgroundColor: rowBackground[row.id] ? "#EDF6F0" : "" }}
          >
            <div className="container">
              <div className="row row-cols-auto">
                {showCheckboxes && (
                  <div className="col">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleCheckboxChange(row.id)}
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
                    fontWeight: rowFontWeight[row.id] || "normal",
                    color: "#252C32",
                    fontSize: 14,
                  }}
                >
                  {row.name}
                  <span
                    style={{
                      color: "#5E7080",
                      fontSize: 12,
                      fontFamily: "Inter",
                      display: "block",
                    }}
                  >
                    {row.email}
                  </span>
                </div>
                <div
                  className="col "
                  style={{
                    color: "#252C32",
                    fontWeight: rowFontWeight[row.id] || "normal",
                    fontSize: 12,
                    fontFamily: "Inter",
                  }}
                >
                  {row.content}
                </div>
                <div
                  className="col ms-auto"
                  style={{
                    color: "#252C32",
                    fontSize: 14,
                    fontFamily: "Inter",
                    fontWeight: rowFontWeight[row.id] || "normal",
                    paddingBottom: "20px",
                  }}
                >
                  {row.date}
                </div>
              </div>
            </div>
          </div>
        ))}

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
            }}
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

export default Search;
