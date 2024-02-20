import React, { useState, useRef } from "react";
import "./css/addProgramPage.css";
import { useLocation, Link } from "react-router-dom";
import FotoDetail from "../components/koin nusantara/Campaign Program/FotoDetail";

import { Row, Col, Button, Modal } from "react-bootstrap";

const AddProgram = () => {
  function selectFiles() {
    fileInputRef.current.click();
  }
  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            nama: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }
  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }
  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            nama: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function uploadImages() {
    console.log("image", images);
  }
  // Fungsi untuk mengubah programName
  const handleProgramNameChange = (event) => {
    setFormData({
      ...formData,
      programName: event.target.value,
    });
  };

  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {};

  // =====================
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  // HOVER
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // ==============
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }
  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            nama: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }
  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }
  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            nama: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function uploadImages() {
    console.log("image", images);
  }

  // =========== FORM HANDLE TERBARU 18/FEB/2024 (13:58)

  const [formData, setFormData] = useState({
    programName: "",
    description: "",
    requestedFunds: "",
    file: "",
  });

  // Fungsi untuk menangani perubahan input dalam formulir
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
  };

  const [showResult, setShowResult] = useState(false);

  // Fungsi untuk menampilkan hasil input
  const displayResult = () => {
    setShowResult(true);
  };

  // MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // buat verfikasi
  const [isFormFilled, setIsFormFilled] = useState(false);

  // Fungsi untuk memeriksa apakah semua form telah diisi
  const checkFormFilled = () => {
    // Memeriksa apakah semua nilai dalam formData tidak kosong
    if (
      formData.programName &&
      formData.description &&
      formData.requestedFunds &&
      formData.file
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="addProgramPage">
        <div className="navPage">
          <div className="navKiri">
            <div className="pageName">
              <img
                className="arrowLeft"
                src="./sidebar/arrow-left.svg"
                alt=""
              />
              <Link to="/koin">
                <button className="kembali">Kembali</button>
              </Link>
            </div>
          </div>

          <div className="navKanan">
            <Link to="/koin">
              <button className="simpanPengajuan">Simpan Pengajuan</button>
            </Link>
            <button
              className="verifikasiProgram"
              onClick={handleShow}
              disabled={!isFormFilled}
            >
              Verifikasi Program
            </button>
          </div>
        </div>

        <div className="menu">
              <nav class="nav ">
            <Link to="/addProgram" className="nav-link informasi">
              Informasi Umum
            </Link>
            <Link to="/fotoDetail" className="nav-link tabFoto">
              Foto Detail
            </Link>
          </nav>
        </div>


        <div className="informasiUmum">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col className="kiri">
                <h3>Detail program</h3>
                <div className="isi">
                  <div className="top">
                    <label>Nama Program</label>
                    <input
                      placeholder="Nama Program"
                      type="text"
                      name="programName"
                      value={formData.programName}
                      onChange={handleInputChange}
                      onBlur={checkFormFilled} // Memeriksa apakah form telah diisi setelah input berubah
                    />
                    <label>Deskripsi</label>
                    <textarea
                      placeholder="E.g Deskripsi detail"
                      // name=""
                      id=""
                      cols="30"
                      rows="10"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      onBlur={checkFormFilled}
                      // Memeriksa apakah form telah diisi setelah input berubah
                      // cols="30"
                      // rows="10"
                    ></textarea>
                  </div>
                  <div className="bottom">
                    <p className="dana">Dana yang diajukan</p>
                    <div className="inputDana">
                      <div className="rpIcon">
                        <span> Rp</span>
                      </div>
                      <input
                        placeholder="0"
                        type="text"
                        name="requestedFunds"
                        value={formData.requestedFunds}
                        onChange={handleInputChange}
                        onBlur={checkFormFilled} // Memeriksa apakah form telah diisi setelah input berubah
                      />
                    </div>
                  </div>
                  {/* <tr></tr> */}
                </div>
              </Col>

              <Col className="kanan">
                <h3>Gambar sampul</h3>
                <div className="top">
                  <div
                    className="dragArea"
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                  >
                    {isDragging ? (
                      <span>apa ini?</span>
                    ) : (
                      <div className="placeholderDrop">
                        <div className="imgContainer">
                          <img src="./koinNusantara/gallery.svg" alt="" />
                        </div>
                        <h1 className="dragText">
                          {" "}
                          Drag & drop image to upload, or browse {""}
                          <span
                            className="browse"
                            role="button"
                            onClick={selectFiles}
                          >
                            browse
                          </span>
                        </h1>
                        <p>
                          1208x840px size required in PNG or JPG format only,
                          maximum 5MB.
                        </p>
                      </div>
                    )}

                    <input
                      type="file"
                      name="file"
                      className="file"
                      multiple
                      ref={fileInputRef}
                      value={formData.file}
                      onChange={(event) => {
                        onFileSelect(event);
                        handleInputChange(event);
                        checkFormFilled();
                      }}
                    ></input>
                  </div>

                  <div className="container">
                    {images.map((images, index) => (
                      <div className="image" key={index}>
                        <span
                          className="delete"
                          onClick={() => deleteImage(index)}
                        >
                          &times;
                        </span>
                        <img src={images.url} alt={images.name} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* =================== */}
                <div className="bottom">
                  <p className="inisiator">Inisiator</p>
                  <div className="inisiatorProf">
                    <img src="./sidebar/profil.svg" alt="" />
                    <p className="administrator">Administrator</p>
                  </div>
                </div>
              </Col>
            </Row>
          </form>

          {/* ======= MODAL ======== */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className="custom-modal"
          >
            <Modal.Header>
              <Modal.Title>Verifikasi Program</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="modalContainer">
                <Col className="kiri">
                  <h5>Sampul pratinjau</h5>
                  {images.map((images, index) => (
              <div className="image" key={index}>
                <p>
                  <img src={images.url} alt={images.name} />
                </p>
              </div>
            ))}
                  {/* <img
                    className="fotoPratinjau"
                    src="./koinNusantara/payung.svg"
                    alt=""
                  /> */}
                </Col>
                <Col className="kanan">
                  <div className="isiKanan">
                    <h5>Judul</h5>
                    <p>{formData.programName}</p>
                  </div>
                  <div className="isiKanan">
                    <h5 className="deskripsi">Deskripsi</h5>
                    <p>{formData.description}</p>
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
                          {/* <p>{formData.requestedFunds}</p> */}
                          <p>
                            {formData.requestedFunds
                              ? formData.requestedFunds
                              : "-"}
                          </p>
                        </div>
                      </Col>
                      <Col>
                        <h5>Dana yang diajukan</h5>
                        <div className="inisiatorProf">
                          <img src="./sidebar/profil.svg" alt="" />
                          <p>Administrator</p>
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
                    </div>
                  </div>
                  <div className="isiKanan pemberitahuanContainer">
                    <p>
                      {" "}
                      <span className="pemberitahuan fw-bold ">
                        {" "}
                        Pemberitahuan:{" "}
                      </span>{" "}
                      Anda wajib melakukan checklist pada persetujuan untuk
                      mengubah status pengajuan program pada dashboard. Ingat!,
                      persetujuan ini permanen dan tidak dapat diubah.
                    </p>
                  </div>
                  <div className="buttonContainer">
                    <button className="back" onClick={handleClose}>
                      <img src="./koinNusantara/back.svg" alt="" />
                      Kembali
                    </button>
                    <button className="setuju" onClick={handleClose}>
                      Saya setuju
                    </button>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </div>

     
      </div>
    </>
  );
};

export default AddProgram;
