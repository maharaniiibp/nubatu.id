import React, { useState, useEffect } from "react";
import "./donatur.css";
import data from "../../../data/donatur.json";

const Donatur = ({ item }) => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <>
      <div className="donatur">
        <div className="donaturContainer">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Tanggal transaksi</th>
                  <th scope="col">Donatur</th>
                  <th scope="col">Bank</th>
                  <th scope="col">No.Rekening</th>
                  <th scope="col">Nominal Donasi</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {jsonData.map((item, index) => (
                  <tr key={index}>
                    <td> {index + 1}</td>
                    <td className="">{item.tglTransaksi}</td>
                    <td className="">{item.donatur}</td>
                    <td className="">
                      <div className="bankContainer">
                                {/* <img className="bankIcon" src={item.bank} alt="" /> */}
                                <div className="iconContainer">
                        <img src={item.bank} alt="" /></div>
                      </div>
                    </td>
                    <td className="">{item.noRek}</td>
                    <td className="">{item.nominal}</td>
                    <td className="">{item.nominal}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <h5> Page 1 of 1</h5>
                <div className="buttonPage">
                  <button
                    className=""
                    // onClick={() => handlePageChange(currentPage - 1)}
                    // disabled={currentPage === 1}
                  >
                    {"Previous"}
                  </button>
                  <button
                    className=""
                    // onClick={() => handlePageChange(currentPage + 1)}
                    // disabled={currentPage === totalPages}
                  >
                    {"Next"}
                  </button>
                </div>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donatur;
