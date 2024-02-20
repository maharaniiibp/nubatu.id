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

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [showModal, setShowModal] = useState(false); // State untuk menentukan apakah modal ditampilkan atau tidak
  const [selectedTransaction, setSelectedTransaction] = useState(null); // State untuk menyimpan data transaksi yang dipilih

  const handleShow = (item) => {
    setSelectedTransaction(item); // Menyimpan data transaksi yang dipilih
    setShowModal(true); // Menampilkan modal
  };

  const handleClose = () => {
    setShowModal(false); // Menyembunyikan modal
  };

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
            <div className="tableContainer">
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
                        <div className="lihat" onClick={() => handleShow(item)}>
                          <span>Lihat</span>
                          <img src="./koinNusantara/eye.svg" alt="" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
      {showModal && selectedTransaction && (
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
            {/* {jsonData.map((item, index) => ( */}
              <div className="content">
                <div className="detailAtas">
                  <p className="title">Tanggal Transaksi</p>
                  <p className="date">{selectedTransaction.tglTransaksi}</p>
                  <p className="price">{selectedTransaction.nominal}</p>
                </div>

                <div className="detailTengah">
                  <div className="tengahBaris">
                    <span className="kiri">Donatur</span>
                    <span className="kanan">{selectedTransaction.donatur}</span>
                  </div>
                  <div className="tengahBaris">
                    <span className="kiri">Transfer melaui</span>
                    <span className="kanan">{selectedTransaction.namaBank}</span>
                  </div>
                  <div className="tengahBaris">
                    <span className="kiri">Nomor Rekening</span>
                    <span className="kanan">{selectedTransaction.noRek}</span>
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
           {/* ) )} */}
          </div>

          <div className="buttonLine">
            <button className="back" onClick={handleClose}>
              <img src="./koinNusantara/back.svg" alt="" />
              Kembali
            </button>
          </div>
        </Modal.Body>
        </Modal>
        )}
    </>
  );
};

export default Donatur;
