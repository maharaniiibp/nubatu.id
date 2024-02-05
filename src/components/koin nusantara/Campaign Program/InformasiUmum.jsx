import React, { useState, useRef } from "react";
import "../../css/addProgram.css";
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

    const handleUpload = () => { };
    

    // =====================
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
  return (
    <>
      <div className="addProgram">
        <Row>
          <Col className="kiri">
            <h3>Detail program</h3>
            <div className="isi">
              <div className="top">
                <span>Nama Program</span>
                <input placeholder="Nama Program" type="text" />
                <span>Deskripsi</span>
                <textarea
                  placeholder="E.g Deskripsi detail"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="bottom">
                <h3>Dana yang diajukan</h3>
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
              {files && (
                <div className="uploads">
                  <ul>
                    {Array.from(files).map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                  <div className="actions">
                    <button onClick={() => setFiles(null)}>Cancel</button>
                    <button onClick={handleUpload}>Upload</button>
                  </div>
                </div>
              )}

              {!files && (
                <div
                  className="dropzone"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div>
                    <div className="imgContainer">
                      <img src="./koinNusantara/gallery.svg" alt="" />
                    </div>

                    <h1>
                      Drag & drop image to upload, or{" "}
                      <span onClick={() => inputRef.current.click()}>
                        browse
                      </span>{" "}
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

              {files && (
                <div className="selectedImages">
                  {Array.from(files).map((file, idx) => (
                    <div key={idx} className="imagePreview">
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                      <p>{file.name}</p>
                    </div>
                  ))}
                </div>
              )}
                      </div>
                      
                      {/* ====================== */}
                      <form action=""
                      onClick={() => document.querySelector(".input-field").click()}>
                          <input type="file" accept="image/*" className="input-field" hidden
                              onChange={({ target: { files } }) => {
                                  files[0] && setFileName(files[0].name)
                                  if (files) {
                                      setImage(URL.createObjectURL(files[0]))
                                  }
                          }} />
                          {image ? 
                              <img src={image} width={150} height={150} alt={fileName} /> : "ayo upload"   }
                      </form>

                      

                      {/* =================== */}
            <div className="bottom">
              <h3>Inisiator</h3>
              <div className="inisiatorProf">
                <img src="./sidebar/profil.svg" alt="" />
                <p>Administrator</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default InformasiUmum;
