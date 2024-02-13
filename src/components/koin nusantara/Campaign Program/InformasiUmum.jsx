import React, { useState, useRef } from "react";
import "../../css/koinNusantara/informasiUmum.css";
import { Row, Col } from "react-bootstrap";

const InformasiUmum = () => {
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

  return (
    <>
      <div className="addProgram">
        <Row>
          <Col className="kiri">
            <h3>Detail program</h3>
            <div className="isi">
              <div className="top">
                <label>Nama Program</label>
                <input placeholder="Nama Program" type="text" />
                <label>Deskripsi</label>
                <textarea
                  placeholder="E.g Deskripsi detail"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="bottom">
                <p className="dana">Dana yang diajukan</p>
                <div className="inputDana">
                  <div className="rpIcon">
                    <span> Rp</span>
                  </div>
                  <input placeholder="0" type="text" />
                </div>
              </div>
              <tr></tr>
            </div>
          </Col>

          <Col className="kanan">
            <h3>Gambar sampul</h3>
            <div className="top">
              {!files && (
                <div
                  className="dropzone"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <div className="imgContainer">
                      <img src="./koinNusantara/gallery.svg" alt="" />
                    </div>

                    <h1>
                      Drag & drop image to upload, or {" "}
                      <span onClick={() => inputRef.current.click()}>
                      {" "} browse
                      </span>
                    </h1>
                    <p>
                      800x600px size required in PNG or
                      <br />
                      JPG format only.
                    </p>

                    <input
                      type="file"
                      multiple
                      onChange={(event) => setFiles(event.target.files)}
                      hidden
                      ref={inputRef}
                    />
                  </div>

                </div>
              )}

              {/* ============================ */}

              {files && (
                <div className="selectedImages">
                  {Array.from(files).map((file, idx) => (
                    <div key={idx} className="imagePreview">
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                      {/* <p>{file.name}</p> */}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {files && (
              <div className="uploads">
                <div className="actions">
                  <button onClick={() => setFiles(null)}>Cancel</button>
                  {/* <button onClick={handleUpload}>Upload</button> */}
                </div>
              </div>
            )}

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
      </div>
    </>
  );
};

export default InformasiUmum;
