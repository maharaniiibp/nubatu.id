import React from "react";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <>
      <div className="py-5">
        <section className="satu">
          <div className="d-flex mx-5">
            <div
              style={{
                color: "black",
                fontSize: 36,
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
              }}
            >
              Beranda
            </div>
            <div className="ms-auto">
              <img
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 50,
                  border: "3px #009B4C solid",
                }}
                src="../assets/tanglet.svg"
                alt="Tanglet Logo"
              />
            </div>
          </div>
        </section>

        <section className="dua py-4">
          <div class="row row-cols-1 row-cols-md-2 g-4 mx-4">
            <div class="col ">
              <div class="card h-90 bg-success">
                <div class="card-body">
                  <Link to="/beranda">
                    <h5 class="card-title fw-bold mx-3 text-white ">Beranda</h5>
                  </Link>
                  <div class="card-body bg-white rounded">
                    <p class="card-text text-black mb-0">data per page</p>
                  </div>
                </div>
                <div className="py-4"></div>
              </div>
            </div>

            <div class="col">
              <div class="card h-90 bg-success">
                <div class="card-body">
                  <Link to="/koin">
                    <h5 class="card-title fw-bold mx-3 text-white  ">
                      Campaign Program
                    </h5>
                  </Link>
                  <div class="card-body bg-white rounded">
                    <p class="card-text text-success mb-0">1 disetujui</p>
                    <p class="card-text text-warning mb-0">1 pengajuan</p>
                    <p class="card-text text-danger mb-0">1 ditolak</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-90 bg-success">
                <div class="card-body">
                  <Link to="/donatur">
                    <h5 class="card-title fw-bold mx-3 text-white ">Donatur</h5>
                  </Link>
                  <div class="card-body bg-white rounded">
                    <p class="card-text text-success mb-0">3 transaksi</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-90 bg-success">
                <div class="card-body">
                  <Link to="/nderektanglet">
                    <h5 class="card-title fw-bold mx-3 text-white ">
                      Nderek Tanglet
                    </h5>
                  </Link>
                  <div class="card-body bg-white rounded">
                    <p class="card-text text-black mb-0">4 chat</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-90 bg-success">
                <div class="card-body">
                  <Link to="/konten">
                    <h5 class="card-title fw-bold mx-3 text-white ">Berita</h5>
                  </Link>
                  <div class="card-body bg-white rounded">
                    <p class="card-text text-warning mb-0">1 draft</p>
                    <p class="card-text text-success mb-0">1 publish</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-90 bg-success">
                <div class="card-body">
                  <Link to="/artikel">
                    <h5 class="card-title fw-bold mx-3 text-white ">Artikel</h5>
                  </Link>
                  <div class="card-body bg-white rounded">
                    <p class="card-text text-warning mb-0">1 draft</p>
                    <p class="card-text text-success mb-0">1 publish</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-90 bg-success">
                <div class="card-body">
                  <Link to="/events">
                    <h5 class="card-title fw-bold mx-3 text-white ">Event</h5>
                  </Link>
                  <div class="card-body bg-white rounded">
                    <p class="card-text text-danger mb-0">Youtube video</p>
                    <p class="card-text text-danger mb-0">Instagram post</p>
                    <p class="card-text text-danger mb-0">Instagram post</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-90 bg-success">
                <div class="card-body">
                  <Link to="/pengaturan">
                    <h5 class="card-title fw-bold mx-3 text-white ">
                      Pengaturan
                    </h5>
                  </Link>
                  <div class="card-body bg-white rounded">
                    <p class="card-text text-black mb-0">detail akun</p>
                    <p class="card-text text-danger mb-0">security</p>
                  </div>
                </div>
                <div className="py-2"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Beranda;
