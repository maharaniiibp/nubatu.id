import React, { useState, useRef } from "react";
import "./fotoDetail.css"
import { Row, Col } from "react-bootstrap";

const FotoDetail = () => {
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
  return (
      <>
          <div className="fotoDetail">
        <div className="container">
          <h3>Gambar detail (3-5 diperlukan untuk mendapatkan persetujuan)</h3>
          {/* bagian atas */}
                          {files && (
                            <div className="uploads">
                              {/* <ul>
                                {Array.from(files).map((file, idx) => (
                                  <li key={idx}>{file.name}</li>
                                ))}
                              </ul> */}
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
                                  {/* <p>{file.name}</p> */}
                                </div>
                              ))}
                            </div>
          )}
          

          {/* bagian bawah */}
          <Row>
            <Col>
            <div className="fotoSatu"></div>
            </Col>
            <Col></Col>
          </Row>

                  </div>
                                  </div>
      </>
  )
}

export default FotoDetail