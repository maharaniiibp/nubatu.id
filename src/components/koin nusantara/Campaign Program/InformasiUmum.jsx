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

  return (
    <>
      <div className="informasiUmum">
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
             <h1 className="dragText"> Drag & drop image to upload, or browse {""}
              <span className="browse" role="button" onClick={selectFiles}>
                browse
                  </span>
                  </h1>
                <p>1208x840px size required in PNG or JPG format only, maximum 5MB.</p>
                </div>
          )}

          <input
            type="file"
            name="file"
            className="file"
            multiple
            ref={fileInputRef}
            onChange={onFileSelect}
            >
              
          </input>
            </div>

            <div className="container">
               {images.map((images, index) => (
            
              <div className="image" key={index}>
                <span className="delete" onClick={() => deleteImage(index)}>
                  &times;
                </span>
                <img src={images.url} alt={images.name} />
              </div>
            ))}
            </div>
            
            {/* <div className="top">
              ====
               {images.map((images, index) => (
            
              <div className="image" key={index}>
                <span className="delete" onClick={() => deleteImage(index)}>
                  &times;
                </span>
                <img src={images.url} alt={images.name} />
              </div>
               ))}
              ====
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


              {files && (
                <div className="selectedImages">
                  {Array.from(files).map((file, idx) => (
                    <div key={idx} className="imagePreview">
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                  
                    </div>
                  ))}
                </div>
              )}
            </div>

            {files && (
              <div className="uploads">
                <div className="actions">
                  <button onClick={() => setFiles(null)}>Cancel</button>
                  
                </div>
              </div>
            )} */}

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
