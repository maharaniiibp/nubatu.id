import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTable, usePagination } from "react-table";
import DataTable from "react-data-table-component";
import dataTable from "../../../data/campaign.json";
import Status from "./Status";
import DataNama from "./DataNama";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../../css/koinNusantara/campaignProgram.css";

const CampaignProgram = ({ data }) => {
  const [jsonData, setJsonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Jumlah item per halaman

  useEffect(() => {
    setJsonData(dataTable);
  }, []);

  const totalPages = Math.ceil(jsonData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (perPage) => {
    setItemsPerPage(perPage);
  };

  // =========================
  // Filtering status
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(dataTable);

  useEffect(() => {
    // Fokuskan tombol menu "Campaign Program" saat komponen dipasang
    const tombolCampaignProgram = document.getElementById(
      "tombolCampaignProgram"
    );
    tombolCampaignProgram.focus();
  }, []);

  const handleFilterButtonClick = (selectedStatus) => {
    if (selectedStatus === "Campaign Program") {
      setSelectedFilters([]); // Mengosongkan filter untuk mematikan filter
    } else {
      if (selectedFilters.includes(selectedStatus)) {
        let filters = selectedFilters.filter((el) => el !== selectedStatus);
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, selectedStatus]);
      }
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, dataTable]);

  const filterItems = () => {
    if (
      selectedFilters.length > 0 &&
      !selectedFilters.includes("Campaign Program")
    ) {
      setFilteredItems(
        dataTable.filter((item) => selectedFilters.includes(item.status))
      );
    } else {
      setFilteredItems([...dataTable]);
    }
  };

  const uniqueStatuses = [
    "Campaign Program",
    ...Array.from(new Set(dataTable.map((item) => item.status))),
  ];

  // SEARCH FILTERING
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [search, setSearch] = useState("");
  const searchContainerRef = useRef();

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="campaign">
        <div className="campaignContainer">
          <div className="navContainer">
            <div className="menu">
              {uniqueStatuses.map((status, index) => (
                <button
                  id={
                    status === "Campaign Program"
                      ? "tombolCampaignProgram"
                      : undefined
                  }
                  onClick={() => handleFilterButtonClick(status)}
                  className={`button ${
                    selectedFilters?.includes(status) &&
                    status !== "Campaign Program"
                      ? "active"
                      : ""
                  }`}
                  key={`filter-${index}`}
                >
                  {status}
                </button>
              ))}
            </div>
            <div ref={searchContainerRef} className="searchContainer">
              {isSearchActive ? (
                <div className="searchInput">
                  <input
                    className="input"
                    type="text"
                    placeholder="Masukkan kata kunci..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <img src="./koinNusantara/search-normal.svg" alt="" />
                </div>
              ) : (
                <div className="search" onClick={handleSearchClick}>
                  <span>Pencarian</span>
                  <img src="./koinNusantara/search-normal.svg" alt="" />
                </div>
              )}
            </div>
          </div>

          <div className="tableContainer">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nama</th>
                  <th scope="col">Status</th>
                  <th scope="col">Inisiator</th>
                  <th scope="col">Dana yang diajukan</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.title.toLowerCase().includes(search) ||
                          item.inisiator.toLowerCase().includes(search);
                  })
                  .map((item, index) => (
                    <tr key={`filtered-${index}`} className="item">
                      <td>
                        <DataNama item={item} />
                      </td>
                      <td className="status data">
                        <Status status={item.status} />
                      </td>
                      <td className="inisiator data">{item.inisiator}</td>
                      <td className="dana data">{item.dana}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="paginationContainer">
            <div className="pageOf">
              <span className="page">
                Page {currentPage} of {totalPages}
              </span>
              <div className="pagination-options">
                <label>
                  Items per page :
                  <select
                    value={itemsPerPage}
                    onChange={(e) =>
                      handleItemsPerPageChange(Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="buttons">
              <button
                className=""
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className=""
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>

          <Status />
        </div>
      </div>

      {/* ============= */}
      {/* button tambah program  */}
      {/* <Link to="/addProgram">
        <button className="addProgram">
          Tambah Program
          <img src="./koinNusantara/plus.svg" alt="" />
        </button>
      </Link> */}
    </>
  );
};

export default CampaignProgram;
