import React, { useState, useEffect } from "react";
import "../../css/koinNusantara/donatur.css";
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
            <table class="table">
              <thead>
                <tr>
                  <th style={{ width: "3%" }} scope="col">
                    #
                  </th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {jsonData.map((item, index) => (
                  <tr key={index}>
                    <td className=""></td>
                    <td className="">{item.tglTransaksi}</td>
                    <td className="">{item.donatur}</td>
                    <td className="">
                      <div className="bankContainer">
                        {/* <img className="bankIcon" src={item.bank} alt="" /> */}
                        <div className="iconContainer">
                          <img src={item.bank} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="">{item.noRek}</td>
                    <td className="">{item.nominal}</td>
                    <td className="">{item.nominal}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <div>
                  <h5> Page 1 of 1</h5>
                  
                </div>
              </tfoot>
            </table>
            {/* ====================================================== */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Donatur;
