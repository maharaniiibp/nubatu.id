import React, { useState } from "react";

const TabelTanglet = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(true);
  const [rowBackground, setRowBackground] = useState({});
  const [rowFontWeight, setRowFontWeight] = useState({});

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
      // Assuming you have rows with ids 1, 2, 3, 4, 5
      setSelectedRows([1, 2, 3, 4, 5]);
      setRowBackground({ 1: true, 2: true, 3: true, 4: true, 5: true });
      setRowFontWeight({ 1: "bold", 2: "bold", 3: "bold", 4: "bold", 5: "bold" });
    }
    setSelectAll(!selectAll);
  };

  const handleRefreshClick = () => {
    // Refresh the entire page
    window.location.reload();
  };

  const handleArrowDownClick = () => {
    // Toggle the visibility of checkboxes
    setShowCheckboxes(!showCheckboxes);
  };

  return (
    <div className="px-4 ">
      <table className="bg-white" style={{ borderRadius: "15px" }}>
        <thead className="table border-bottom">
          {/* header tabel */}
          <tr>
            <th className="py-2" style={{ paddingLeft: "20px" }} scope=" col">
              <input
                type="checkbox"
                checked={selectAll && showCheckboxes}
                onChange={handleSelectAllChange}
              />
              <img
                className="mb-1 mx-2"
                src="../assets/arrow-down.svg"
                alt="Arrow Down"
                onClick={handleArrowDownClick}
                style={{ cursor: "pointer" }}
              />
              <img
                className="mb-1 mx-2"
                src="../assets/refresh.svg"
                alt="Refresh"
                onClick={handleRefreshClick}
                style={{ cursor: "pointer" }}
              />
            </th>
          </tr>
        </thead>
        <tbody>

          {/* tabel 1 */}
          <tr
            className="border-bottom"
            style={{ backgroundColor: rowBackground[1] ? "#EDF6F0" : "" }}
          >
            {showCheckboxes && (
              <td className="py-3" style={{ paddingLeft: "20px" }}>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(1)}
                  onChange={() => handleCheckboxChange(1)}
                />
                <img
                  style={{
                    marginLeft: "35px",
                    width: 47,
                    height: 47,
                  }}
                  src="../assets/yellow.svg"
                  alt="Tanglet Logo"
                />
              </td>
            )}

            <td
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: rowFontWeight[1] || "normal", // menggunakan bold jika diperlukan
                color: "#252C32",
                fontSize: 14,
                paddingLeft: "20px",
              }}
            >
              Ziyad Ahmad Baharuddin{" "}
              <span
                style={{
                  color: "#5E7080",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
                <br />
                ziyadbaharuddin@gmail.com
              </span>
            </td>
            <td
              style={{
                color: "#252C32",
                fontWeight: rowFontWeight[1] || "normal", 
                fontSize: 14,
                fontFamily: "Inter",
                // fontWeight: "400",
                paddingLeft: "88px",
                paddingBottom: "20px",
              }}
            >
              Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
              menghadi...
            </td>
            <td
              style={{
                color: "#252C32",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: rowFontWeight[1] || "normal", 
                paddingLeft: "200px",
                paddingBottom: "20px",
                paddingRight: "20px",
              }}
            >
              Sep 26, 2023
            </td>
          </tr>

          {/* tabel 2 */}
          <tr
            className="border-bottom"
            style={{ backgroundColor: rowBackground[2] ? "#EDF6F0" : "" }}
          >
            {showCheckboxes && (
              <td className="py-3" style={{ paddingLeft: "20px" }}>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(2)}
                  onChange={() => handleCheckboxChange(2)}
                />
                <img
                  style={{
                    marginLeft: "35px",
                    width: 47,
                    height: 47,
                  }}
                  src="../assets/yellow.svg"
                  alt="Tanglet Logo"
                />
              </td>
            )}

            <td
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: rowFontWeight[2] || "normal", // menggunakan bold jika diperlukan
                color: "#252C32",
                fontSize: 14,
                paddingLeft: "20px",
              }}
            >
              Ziyad Ahmad Baharuddin{" "}
              <span
                style={{
                  color: "#5E7080",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
                <br />
                ziyadbaharuddin@gmail.com
              </span>
            </td>
            <td
              style={{
                color: "#252C32",
                fontWeight: rowFontWeight[2] || "normal", 
                fontSize: 14,
                fontFamily: "Inter",
                // fontWeight: "400",
                paddingLeft: "88px",
                paddingBottom: "20px",
              }}
            >
              Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
              menghadi...
            </td>
            <td
              style={{
                color: "#252C32",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: rowFontWeight[2] || "normal", 
                paddingLeft: "200px",
                paddingBottom: "20px",
                paddingRight: "20px",
              }}
            >
              Sep 26, 2023
            </td>
          </tr>

          {/* tabel 3 */}
          <tr
            className="border-bottom"
            style={{ backgroundColor: rowBackground[3] ? "#EDF6F0" : "" }}
          >
            {showCheckboxes && (
              <td className="py-3" style={{ paddingLeft: "20px" }}>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(3)}
                  onChange={() => handleCheckboxChange(3)}
                />
                <img
                  style={{
                    marginLeft: "35px",
                    width: 47,
                    height: 47,
                  }}
                  src="../assets/yellow.svg"
                  alt="Tanglet Logo"
                />
              </td>
            )}

            <td
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: rowFontWeight[3] || "normal", // menggunakan bold jika diperlukan
                color: "#252C32",
                fontSize: 14,
                paddingLeft: "20px",
              }}
            >
              Ziyad Ahmad Baharuddin{" "}
              <span
                style={{
                  color: "#5E7080",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
                <br />
                ziyadbaharuddin@gmail.com
              </span>
            </td>
            <td
              style={{
                color: "#252C32",
                fontWeight: rowFontWeight[3] || "normal", 
                fontSize: 14,
                fontFamily: "Inter",
                // fontWeight: "400",
                paddingLeft: "88px",
                paddingBottom: "20px",
              }}
            >
              Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
              menghadi...
            </td>
            <td
              style={{
                color: "#252C32",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: rowFontWeight[3] || "normal", 
                paddingLeft: "200px",
                paddingBottom: "20px",
                paddingRight: "20px",
              }}
            >
              Sep 26, 2023
            </td>
          </tr>

          {/* tabel 4 */}
          <tr
            className="border-bottom"
            style={{ backgroundColor: rowBackground[4] ? "#EDF6F0" : "" }}
          >
            {showCheckboxes && (
              <td className="py-3" style={{ paddingLeft: "20px" }}>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(4)}
                  onChange={() => handleCheckboxChange(4)}
                />
                <img
                  style={{
                    marginLeft: "35px",
                    width: 47,
                    height: 47,
                  }}
                  src="../assets/yellow.svg"
                  alt="Tanglet Logo"
                />
              </td>
            )}

            <td
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: rowFontWeight[4] || "normal", // menggunakan bold jika diperlukan
                color: "#252C32",
                fontSize: 14,
                paddingLeft: "20px",
              }}
            >
              Ziyad Ahmad Baharuddin{" "}
              <span
                style={{
                  color: "#5E7080",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
                <br />
                ziyadbaharuddin@gmail.com
              </span>
            </td>
            <td
              style={{
                color: "#252C32",
                fontWeight: rowFontWeight[4] || "normal", 
                fontSize: 14,
                fontFamily: "Inter",
                // fontWeight: "400",
                paddingLeft: "88px",
                paddingBottom: "20px",
              }}
            >
              Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
              menghadi...
            </td>
            <td
              style={{
                color: "#252C32",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: rowFontWeight[4] || "normal", 
                  paddingLeft: "200px",
                  paddingBottom: "20px",
                  paddingRight: "20px",
              }}
            >
              Sep 26, 2023
            </td>
          </tr>
        </tbody>
      </table>
      <div className="py-5"></div>
    </div>
  );
};

export default TabelTanglet;
