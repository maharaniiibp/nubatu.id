import React from "react";
import BuatBerita from "../components/Konten/Berita/addBerita";
import { Link } from "react-router-dom";
import "./css/addBerita.css"

const AddBerita = () => {
  return (
    <>
          <div className="addBerita">
              
        <div className="addBeritaNav">
          <div className="navKiri">
            <div className="pageName">
              <div>
                <img
                  className="arrowLeft"
                  src="./sidebar/arrow-left.svg"
                  alt=""
                />
              </div>
              <Link to="/konten">
                <button className="kembali">Kembali</button>
              </Link>
            </div>
          </div>

          <div className="navKanan">
            <Link to="">
              <button className="simpanPengajuan">Simpan sebagai draft</button>
            </Link>
            {/* <Link to=""> */}
            <button
              className="verifikasiProgram"
              //   onClick={handleShow}
            >
              Publish sekarang
            </button>
          </div>
        </div>

        <div>
          <BuatBerita />
        </div>
      </div>
    </>
  );
};

export default AddBerita;
