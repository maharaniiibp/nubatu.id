import React, { useState, useEffect } from "react";
import "../../css/koinNusantara/donatur.css";
import data from "../../../data/donatur.json";
import { Modal, Col, Row } from "react-bootstrap";

const Donatur = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  // INI BUAT MODAL TRANSAKSI
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="donatur">
        <div className="donaturContainer">
          <div className="table-wrapper">
            <div className="filterContainer">
              <button>
                <img src="./koinNusantara/filter.svg" alt="" />
                Filter
              </button>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th style={{ width: "5%" }} scope="col">
                    No
                  </th>
                  <th scope="col">Tanggal transaksi</th>
                  <th scope="col">Donatur</th>
                  <th scope="col">Bank</th>
                  <th scope="col">No. Rekening</th>
                  <th scope="col">Nominal Donasi</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {jsonData.map((item, index) => (
                  <tr key={index}>
                    <td className="">{index + 1}</td>
                    <td className="">{item.tglTransaksi}</td>
                    <td className="">{item.donatur}</td>
                    <td className="">
                      <div className="bankContainer">
                        <div className="iconContainer">
                          <img src={item.bank} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="">{item.noRek}</td>
                    <td className="">{item.nominal}</td>
                    <td className="">
                      <div className="lihat" onClick={handleShow}>
                        <span>Lihat</span>
                        <img src="./koinNusantara/eye.svg" alt="" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="paginationContainer">
              <span>Page 1 of 1</span>
              <div className="buttons">
                <button
                  className="previous"
                  // onClick={() => handlePageChange(currentPage - 1)}
                  // disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className="next"
                  // onClick={() => handlePageChange(currentPage + 1)}
                  // disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
            {/* ====================================================== */}
          </div>
        </div>
      </div>

      {/* MODAL DESIGN  */}
      <Modal
        show={show}
        size="md"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Detail Transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="detailContainer">
            <div className="topDetail"></div>
            <div className="content">
            <div className="detailAtas">
              <p className="title">Tanggal Transaksi</p>
              <p className="date">01 Okt 2023 08:43:04 WIB</p>
              <p className="price">Rp750.000</p>
            </div>

            <div className="detailTengah">
              <div className="tengahBaris">
                <span className="kiri">Donatur</span>
                <span className="kanan">Ahmad Alamsyah Rauf</span>
              </div>
              <div className="tengahBaris">
                <span className="kiri">Transfer melaui</span>
                <span className="kanan">BNI (Bank Negara Indonesia)</span>
              </div>
              <div className="tengahBaris">
                <span className="kiri">Nomor Rekening</span>
                <span className="kanan">0495285835</span>
              </div>
            </div>
            <div className="detailBawah">
              <div className="bawahBaris">
                <span className="kiri">Penerima</span>
                <span className="kanan">LAZIZMU BATU</span>
              </div>
              <div className="bawahBaris">
                <span className="kiri">Bank Penerima</span>
                <span className="kanan">BSI (Bank Syariah Indonesia)</span>
              </div>
              </div>
              </div>
          </div>

<div className="buttonLine">
          <button className="back" onClick={handleClose}>
                            <img src="./koinNusantara/back.svg" alt="" />
                           Kembali 
            </button>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Donatur;
