import React, { useState, useRef } from "react";
import "../../css/koinNusantara/fotoDetail.css";
// import { Row, Col } from "react-bootstrap";
// import { ImagesearchRoller } from "@mui/icons-material";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../../../data/carousel.json'

const FotoDetail = () => {
  // const [files, setFiles] = useState(null);
  // const inputRef = useRef();
  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };
  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   setFiles(event.dataTransfer.files);
  // };

  // const handleUpload = () => {
  // };

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
      <div className="fotoDetail">
        <div className="card">
        <h3>Gambar detail (3-5 diperlukan untuk mendapatkan persetujuan)</h3>
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
          ></input>
          </div>

          <div className="container">
          <Carousel className="bg-primary">
  {images.map((image, index) => (
    <Carousel.Item key={index}>
      <div className="image">
        <span className="delete" onClick={() => deleteImage(index)}>
          &times;
        </span>
        <img src={image.url} alt={image.name} />
      </div>
      <Carousel.Caption>
        {/* Isi caption jika diperlukan */}
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>

            {/* {images.map((images, index) => (
            
              <div className="image" key={index}>
                <span className="delete" onClick={() => deleteImage(index)}>
                  &times;
                </span>
                <img src={images.url} alt={images.name} />
              </div>
            ))} */}
          </div>
          </div>
        
        {/* <button type="button" onClick={uploadImages}>
          Upload
        </button> */}
      </div>
      {/* <div className="fotoDetail">
        <Row>
          <h3>Gambar detail (3-5 diperlukan untuk mendapatkan persetujuan)</h3>
          {files && (
            <div className="uploads">
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
                  <span onClick={() => inputRef.current.click()}>browse</span>{" "}
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

          <Row className="photoPreview">
            <Col>
              <div className="fotoSatu"></div>
              {uploadedImage && (
    <div className="fotoSatu">
        <img src={URL.createObjectURL(uploadedImage)} alt={uploadedImage.name} />
    </div>
)}

            </Col>
            <Col></Col>
          </Row>
        </Row>
      </div> */}
    </>
  );
};

export default FotoDetail;
