import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import "../../css/konten/addBerita.css";
import TextEditor from "./textEditor";

const AddBerita = () => {
  const [judul, setJudul] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jurnalis, setJurnalis] = useState("");
    const [konten, setKonten] = useState("");
    

    // =============================
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


  return (
    <>
      <div className="addBeritaContainer">
        <h5>Buat Berita</h5>

        <form action="">
          {/* INPUT JUDUL  */}
          <Row>
            <input
              className={`title ${judul.length > 0 ? "bold-text" : ""}`} // Menambahkan class "bold-text" jika nilai input tidak kosong
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Berikan ini judul"
              // className="title"
              // type="text"
              // value={judul}
              // onChange={(e) => setJudul(e.target.value)}
              // placeholder="Berikan ini judul"
            />
          </Row>
          {/* DRAG and DROP  */}
          <Row>
            <div className="dragDrop">
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
                  <div className="isi">
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
                      Minimum 1080px width recommended. Max 5MB each (10MB for
                      videos)
                    </p>

                    <ul>
                      <li className="listGanjil">
                        Good resolution images (png, jpg) or video (mp4)
                      </li>
                      <li>Only upload media you own the rights to</li>
                    </ul>

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
            </div>
          </Row>

          {/* TANGGAL & JURNALIS  */}
          <Row className="tglJurnalis">
            {/* Tanggal  */}
            <Col className="kiri">
              <div className="">
                <label htmlFor="">Tanggal</label>
                <div className="calendar">
                  <img src="./konten/calendar.svg" alt="" />
                  <input
                    className="kiri"
                    type="text"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    placeholder="Tanggal"
                  />
                </div>
              </div>
            </Col>
            <Col className="">
              <div className="">
                <label htmlFor="">Jurnalis</label>
                <input
                  className="kanan"
                  type="text"
                  value={jurnalis}
                  onChange={(e) => setJurnalis(e.target.value)}
                  placeholder="Nama jurnalis"
                />
              </div>
            </Col>
          </Row>

          {/* TEXT EDITOR  */}
          <Row></Row>
        </form>
          <TextEditor value={konten} onChange={(value) => setKonten(value)} />
      </div>
    </>
  );
};

export default AddBerita;
