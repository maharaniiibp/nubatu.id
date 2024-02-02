import React, { useState } from "react";

const TabelTanglet = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(true);

  const handleCheckboxChange = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      // Assuming you have rows with ids 1, 2, 3, 4, 5
      setSelectedRows([1, 2, 3, 4, 5]);
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
    <div className="px-4">
      <table className="table bg-white">
        <thead className="border-bottom">
          <tr>
            <th scope="col">
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
          <tr>
            {showCheckboxes && (
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(1)}
                  onChange={() => handleCheckboxChange(1)}
                />
              </td>
            )}
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            {showCheckboxes && (
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(2)}
                  onChange={() => handleCheckboxChange(2)}
                />
              </td>
            )}
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            {showCheckboxes && (
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(3)}
                  onChange={() => handleCheckboxChange(3)}
                />
              </td>
            )}
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelTanglet;
