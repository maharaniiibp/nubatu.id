import React from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <>
      <section className="satu">
        <div className="p-sm-5 d-sm-flex align-items-center">
          <div className="flex-shrink-0">
            <div
              className="p-2 rounded-md"
              style={{ backgroundColor: "#198754", borderRadius: "10px" }}
            >
              <div className="mb-1 mx-2 p-2">
                <img
                  src="./assets/pcnu.png"
                  alt="gambar pcnu"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div
            className="flex-grow-1 ms-5 fw-bold fs-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            PCNU Kota Batu, mendigdayakan <br /> NU menjemput abad kedua menuju{" "}
            <br /> kebangkitan baru.
            <div className="fs-6 mt-4 fw-medium">
              Bertempat di Jl. Agus Salim No.21 Sisir, kec. Batu, Kota Batu,
              PCNU <br />
              Batu memiliki tugas utama yaitu mengatur dan mengelola roda
              organisasi <br />
              di tingkat cabang, agar roda organisasi dapat berjalan dengan
              terarah <br />
              dan dinamis sesuai dengan keberadaan dan kebutuhan NU yang ada di
              kota <br />
              batu secara khusus. Sama halnya dengan PCNU cabang lainnya, PCNU
              Kota <br />
              batu juga memiliki struktur pengurus, badan-badan otonom, serta{" "}
              <br />
              program kerja.
            </div>
            <div className="mb-4"></div>
            <Link to="/koin" style={{ textDecoration: "none" }}>
              <button style={{ backgroundColor: "#198754" }} className="d-flex border border-0 rounded-2 p-2">
                <div className="flex-shrink-0">
                  <img src="./assets/coin.svg" alt="..." />
                </div>
                <div className="flex-grow-1 ms-2 mt-2 fs-6 fw-normal text-white">
                  Koin NUsantara
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="dua">
        <div className="p-4" style={{ backgroundColor: "#EDF6F0" }}>
          <p className="text-success fs-4 fw-bold">Nderek Tanglet</p>
        </div>
      </section>
    </>
  );
};

export default Beranda;
