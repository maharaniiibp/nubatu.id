import React, { useState } from 'react';

function NderekTanglet() {
  const [showModal, setShowModal] = useState(false);
  const [passwordLama, setPasswordLama] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSaveChanges = () => {
    // Periksa apakah password lama dan password baru sudah diisi
    if (passwordLama !== '' && passwordBaru !== '') {
      setShowModal(true); // Atur showModal menjadi true saat kondisi terpenuhi
    } else {
      alert('Silakan isi kedua password terlebih dahulu.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: #EDF6F0;
            margin: 0;
            padding: 0;
          }
        `}
      </style>

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
            Setting
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

      <section className="dua bg-white mx-5 mt-5 p-4 border rounded-4">
        <div className="container">
          <div className="row" style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="col-md-8 fw-bold fs-4">Detail Akun</div>
            <div className="col-6 col-md-4 fw-bold fs-5">
              Foto Profil
              <div className="d-flex py-3 flex-column flex-md-row align-items-center">
                <div className="flex-shrink-0 mb-3 mb-md-0 me-md-3">
                  <img src="assets/pengaturan.svg" alt="foto setting" />
                </div>
                <div className="flex-grow-1 fw-normal fs-6">
                  Update your avatar by clicking the image beside. 288x288 px
                  size recommended in PNG or JPG format only.
                </div>
              </div>
              <div className="col-md-8 fw-bold fs-5">Detail </div>
              <div className="py-2 fw-normal" style={{ fontSize: "15px" }}>
                Nama
              </div>
              <div
                className="border border-dark-subtle rounded p-2 mb-2"
                style={{ fontSize: "15px" }}
              >
                Ahmad Ali
              </div>
              <div className="py-2 fw-normal" style={{ fontSize: "15px" }}>
                Email
              </div>
              <div
                className="border border-dark-subtle rounded p-2 mb-2"
                style={{ fontSize: "15px" }}
              >
                aliahmad21@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="border-bottom border-dark-subtle p-3"></div>

        <div className="container py-4">
          <div className="row" style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="col-md-8 fw-bold fs-4">Security</div>
            <div className="col-6 col-md-4 fw-bold fs-5">
              Reset Password
              <div className="mb-3 pt-4 fw-semibold" style={{ fontSize: "15px" }}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password lama
        </label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control border-dark-subtle fw-bold"
            id="exampleFormControlInput1"
            placeholder=""
            value={passwordLama}
            onChange={(e) => setPasswordLama(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
              
      <div className="fw-semibold" style={{ fontSize: "15px" }}>
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Password Baru
        </label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control border-dark-subtle fw-bold"
            id="exampleFormControlInput2"
            placeholder=""
            value={passwordBaru}
            onChange={(e) => setPasswordBaru(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>


            </div>
          </div>
          {/* Tombol Simpan Perubahan */}
          <button className="btn btn-success" onClick={handleSaveChanges}>
            Simpan Perubahan
          </button>
        </div>

        {/* Modal */}
        {showModal && (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Success mengubah password</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                
              </div>
            </div>
          </div>
        </div>
      )}
      </section>
    </>
  );
}

export default NderekTanglet;
