import React, { useState } from "react";
import { Link } from "react-router-dom";

const Editjawaban = () => {
  const [nama, setNama] = useState("Ust Ahmad Husaei S.S");
  const [jawaban, setJawaban] = useState(
    "Bahwa menghadiahkan pahala surat fatihah untuk non Muslim yang sudah meninggal dunia, hukumnya haram. Kalau mendoakan non Muslim yang masih hidup agar mendapatkan hidayah atau kebaikan dunia, seperti mendokan agar sehat, itu boleh."
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Lakukan logika penyimpanan data di sini, misalnya kirim ke backend
  };

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
                className="col text-black"
                style={{ fontSize: 18, fontFamily: "Inter", fontWeight: "600" }}
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
              className="col"
              style={{
                color: "black",
                fontSize: 22,
                fontFamily: "Inter",
                fontWeight: "600",
              }}
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
                className="py-2"
              >
                Izin bertanya pak kiai, katanya boleh tidak seorang Muslim
                menghadiahkan fatihah kepada orang yang non Muslim, atau
                bertawasul untuk non Muslim tersebut? Kalau boleh, kira² apa
                dasar referensi kitabnya? Atau dalam sejarah, pernahkah sahabat
                atau Rasulullah sendiri melakukannya? Jika tidak, mengapa bisa
                demikian?
              </p>
              <p
                style={{
                  width: 854,
                  color: "#808080",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
                Sep 26, 2023
              </p>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="row row-cols-auto">
            <div className="col">
              <img
                style={{ width: 47, height: 47 }}
                src="../assets/administrator.png"
                alt="Administrator"
              />
            </div>
            <div
              className="col"
              style={{
                color: "black",
                fontSize: 22,
                fontFamily: "Inter",
                fontWeight: "600",
              }}
            >
              Administrator
            </div>
            <div className="col ms-auto ">
              <img
                className=" mx-2"
                onClick={handleEdit}
                src="../assets/editchat.svg"
                alt="edit"
              />
              <img className=" mx-2" src="../assets/delete.svg" alt="delete" />
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "78px",
          }}
          className="pb-5"
        >
          <div
            style={{
              width: 854,
              color: "#009B4C",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Dijawab oleh
            <span
              style={{
                width: 854,
                color: "#009B4C",
                fontSize: 16,
                fontFamily: "Inter",
                fontWeight: "600",
              }}
              className="mx-2"
            >
              Ust Ahmad Husaei S.S{" "}
            </span>
            <p
              style={{
                width: 854,
                fontSize: 18,
                fontFamily: "Inter",
                fontWeight: "400",
              }}
              className="py-2 text-black fw-bold"
            >
              Bahwa menghadiahkan pahala surat fatihah untuk non Muslim yang
              sudah meninggal dunia, hukumnya haram. Kalau mendoakan non Muslim
              yang masih hidup agar mendapatkan hidayah atau kebaikan dunia,
              seperti mendokan agar sehat, itu boleh.
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
        <div
          className="container mx-4"
          style={{
            color: "#404040",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: "500",
            marginTop: "50px",
          }}
        >
          Dijawab oleh
        </div>
        <div className="mx-4">
          {isEditing ? (
            <>
              <input
                type="text"
                id="form2Example18"
                className="form-control form-control-lg fs-6 "
                placeholder="Nama Kyai/Ust/Habib"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <textarea
                id="form2Example18"
                className="form-control form-control-lg fs-6 mt-3"
                style={{ height: "100px" }}
                placeholder="Jawaban"
                value={jawaban}
                onChange={(e) => setJawaban(e.target.value)}
              />
              <button className="btn border rounded mt-3" onClick={handleSave}>
                <img src="../assets/reply.svg" alt="reply" />
              </button>
            </>
          ) : (
            <>
              <div className="row mx-3 py-5">
                <div className="py-3">
                  <strong>{nama}</strong>
                </div>
                <div className="py-3">{jawaban}</div>
                {/* <button
                  className="btn border rounded mt-3"
                  onClick={handleEdit}
                >
                  Edit
                </button> */}
                {/* <button
                className="btn border rounded" onClick={handleSave}
                type="button"
                style={{ paddingTop: 15, paddingBottom: 15, width: "100px" }}
              >
                <img src="../assets/reply.svg" alt="reply" />
              </button> */}
              </div>
            </>
          )}
        </div>
      </section>
      <div className="py-5"></div>
    </div>
  );
};

export default Editjawaban;
