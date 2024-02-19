import React, { useState } from 'react';

const EditEvent = () => {
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol visibilitas modal

  // Fungsi untuk menangani klik pada gambar "edit" dan menampilkan modal
  const handleEditClick = () => {
    setShowModal(true); // Set state showModal menjadi true saat gambar "edit" diklik
  };

  return (
    <div>
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
            Event
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

      <section className="dua">
        <div className="p-5">
          <div className="row border-0 rounded p-4 bg-light">
            <div
              className="col-auto me-auto fw-bold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <img src="assets/youtube.png" alt="edit" className="mx-2" />
              Youtube Video
            </div>
            <div className="col-auto mx-5">
              <img src="assets/toggle.svg" alt="toggle" />
            </div>
            <div className="btn border-0 col-auto" onClick={handleEditClick}>
              <img src="assets/edit.svg" alt="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            </div>
            <div className="col-auto">
              <img src="assets/hapus.svg" alt="delete" />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
