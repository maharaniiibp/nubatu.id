import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/nderek tanglet/detailchatt.css";

const Detailchat = () => {
  const [nama, setNama] = useState("");
  const [jawaban, setJawaban] = useState("");

  return (
    <div>
      <section className="satu mx-2 py-5">
        <Link to="/nderektanglet">
          <div className="container">
            <div className="row row-cols-auto">
              <div className="col">
                <img src="../assets/arrow-left.svg" alt="Tanglet Logo" />
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontFamily: "Inter",
                  fontWeight: "600",
                }}
                className="col text-black"
              >
                Kembali
              </div>
            </div>
          </div>
        </Link>
      </section>

      <section className="dua mx-4 b border-none bg-white rounded p-4">
        <div className="container">
          <div className="row row-cols-auto">
            <div className="col">
              <img
                style={{ width: 47, height: 47 }}
                src="../assets/yellow.svg"
                alt="Tanglet Logo"
              />
            </div>
            <div
              style={{
                color: "black",
                fontSize: 22,
                fontFamily: "Inter",
                fontWeight: "600",
              }}
              className="ziyad col"
            >
              Ziyad Ahmad Baharuddin
              <p
                style={{
                  width: 854,
                  color: "#404040",
                  fontSize: 18,
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
                className="py-3"
              >
                Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
                menghadiahkan fatihah kepada orang yang non Muslim, atau
                bertawasul untuk non Muslim tersebut? Kalau boleh, kira² apa
                dasar referensi kitabnya? Atau dalam sejarah, pernahkah sahabat
                atau Rasulullah sendiri melakukannya? Jika tidak, mengapa bisa
                demikian?
              </p>
              <span
                style={{
                  width: 854,
                  color: "#808080",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
                Sep 26, 2023
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            color: "#404040",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "500",
            marginTop: "50px",
          }}
          className=" mx-4"
        >
          Dijawab oleh
        </div>
        <div className="mx-4">
          <input
            style={{
              marginTop: "20px",
            }}
            type="nama"
            id="form2Example18"
            className="form-control form-control-lg fs-6 "
            placeholder="Nama Kyai/Ust/Habib"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="row mx-3 py-5 ">
          <div className="input-group ">
            <input
              type="search"
              id="form2Example18"
              className="form-control form-control-lg fs-6  "
              style={{ paddingTop: 30, paddingBottom: 30 }}
              placeholder="Jawaban"
              value={jawaban}
              onChange={(e) => {
                setJawaban(e.target.value);
              }}
            />
            <Link to="/editjawaban">
              <button
                className="btn border rounded"
                type="button"
                style={{ paddingTop: 30, paddingBottom: 30 }}
              >
                <img src="../assets/reply.svg" alt="close" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="py-5"></div>
    </div>
  );
};

export default Detailchat;
