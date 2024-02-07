import React, { useState } from "react";
import "./css/navbar.css";
import { useLocation, Link } from "react-router-dom";
import { Button, Modal, Col, Row } from "react-bootstrap";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let pageName = "";
  switch (pathname) {
    case "/":
      pageName = "Beranda";
      break;
    case "/koin":
      pageName = "Koin";
      break;
    case "/donatur":
      pageName = "donatur";
      break;
    case "/nderek":
      pageName = "Nderek tanglet";
      break;
    case "/konten":
      pageName = "Konten";
      break;
    case "/anggota":
      pageName = "Anggota";
      break;
    case "/pengurus":
      pageName = "Pengurus";
      break;
    case "/pengaturan":
      pageName = "Pengaturan";
      break;
    default:
      pageName = "";
      break;
  }

  // navbar campaign Program
  const isButtonVisible = pathname === "/koin";
  // Tentukan kondisi untuk menentukan apakah harus menampilkan isi Navbar atau tidak
  const isKoinNav = pathname == "/koin";
  const isAddProgramNav = pathname == "/addProgram";
  const isDonatur = pathname == "/donatur";

  // INI BUAT MODAL PENGAJUAN
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          {/* Nav nya KOIN  */}
          {isKoinNav && (
            <>
              <div className="navKiri">
                <div className="pageName">
                  <p>{pageName}</p>
                </div>
              </div>

              <div className="navKanan">
                <Link to="/addProgram">
                  <button className="addProgram">
                    Tambah Program
                    <img src="./koinNusantara/plus.svg" alt="" />
                  </button>
                </Link>

                <div className="account">
                  <img src="./sidebar/profil.svg" alt="Me" className="photo" />
                </div>
              </div>
            </>
          )}

          {/* Nav nya ADD PROGRAM  */}
          {isAddProgramNav && (
            <>
              <div className="navKiri">
                <div className="pageName">
                  <img
                    className="arrowLeft"
                    src="./sidebar/arrow-left.svg"
                    alt=""
                  />
                  <span>Kembali</span>
                </div>
              </div>

              <div className="navKanan">
                <Link to="">
                  <button className="simpanPengajuan">Simpan Pengajuan</button>
                </Link>
                {/* <Link to=""> */}
                <button className="verifikasiProgram" onClick={handleShow}>
                  Verifikasi Program
                </button>

                <Modal
                  show={show}
                  size="lg"
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header>
                    <Modal.Title>Verifikasi Program</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row className="modalContainer">
                      <Col className="kiri">
                        <h5>Sampul pratinjau</h5>
                        <img
                          className="fotoPratinjau"
                          src="./koinNusantara/payung.svg"
                          alt=""
                        />
                      </Col>
                      <Col xs={7} className="kanan">
                        <div className="isiKanan">
                          <h5>Judul</h5>
                          <p>Sedekah banjir dan jembatan putus untuk dampit</p>
                        </div>
                        <div className="isiKanan">
                          <h5 className="deskripsi">Deskripsi</h5>
                          <p>
                            Program pengumpulan dana bantuan kesehatan dan
                            makanan untuk korban bencana banjir bandang di
                            dampit, kabupaten malang jawa timur.
                          </p>
                        </div>
                        <div>
                          <Row className="isiKanan">
                            <Col>
                              <h5>Dana yang diajukan</h5>
                              <div className="dana">
                                <div className="Rp">
                                  {" "}
                                  <span>Rp</span>{" "}
                                </div>
                                <p>50.000.000</p>
                              </div>
                            </Col>
                            <Col>
                              <h5>Dana yang diajukan</h5>
                              <div className="inisiatorProf">
                                <img src="./sidebar/profil.svg" alt="" />
                                <p>Administratorr</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="isiKanan">
                          <h5>Persetujuan Program</h5>
                          <div className="checkboxContainer">
                            <div className="checkbox">
                              <input type="checkbox" className="" />
                              <label>Diterima</label>
                            </div>
                            <div className="checkbox">
                              <input type="checkbox" className="checkbox" />
                              <label>Ditolak</label>
                            </div>
                            {/* <img src="./koinNusantara/checklist.svg" alt="" className="checked"/> */}
                          </div>
                        </div>
                        <div className="isiKanan pemberitahuanContainer">
                          <p>
                            {" "}
                            <span className="pemberitahuan fw-bold ">
                              {" "}
                              Pemberitahuan:{" "}
                            </span>{" "}
                            Anda wajib melakukan checklist pada persetujuan
                            untuk mengubah status pengajuan program pada
                            dashboard. Ingat!, persetujuan ini permanen dan
                            tidak dapat diubah.
                          </p>
                        </div>

                        {/* button  */}
                        <div className="buttonContainer">
                          <button className="back" onClick={handleClose}>
                            <img src="./koinNusantara/back.svg" alt="" />
                           Kembali 
                          </button>
                          <button className="setuju" onClick={handleClose}>Saya setuju</button>
                        </div>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>

                {/* </Link> */}
              </div>
            </>
          )}

          {/* Nav nya DONATUR  */}
          {isDonatur && (
            <>
              <div className="navKiri">
                <div className="pageName">
                  <p>{pageName}</p>
                </div>
              </div>

              <div className="navKanan">
                <div className="account">
                  <img src="./sidebar/profil.svg" alt="Me" className="photo" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
