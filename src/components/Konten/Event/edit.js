import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const EditEvent = () => {
  const [showEditModal, setShowEditModal] = useState(false); // State untuk mengontrol visibilitas modal edit
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State untuk mengontrol visibilitas modal penghapusan
  const [selectedPlatform, setSelectedPlatform] = useState(""); // State untuk menyimpan platform yang dipilih

  const handleSelect = (platform) => {
    setSelectedPlatform(platform); // Memperbarui state dengan platform yang dipilih
  };
  // Fungsi untuk menangani klik pada gambar "edit" dan menampilkan modal edit
  const handleEditClick = () => {
    setShowEditModal(true); // Set state showEditModal menjadi true saat gambar "edit" diklik
  };

  // Fungsi untuk menangani klik pada tombol "Hapus" dan menampilkan modal penghapusan
  const handleDeleteClick = () => {
    setShowDeleteModal(true); // Set state showDeleteModal menjadi true saat gambar "delete" diklik
  };

  // Fungsi untuk menangani penutupan modal edit
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  // Fungsi untuk menangani penutupan modal penghapusan
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  // Fungsi untuk menangani penghapusan event
  const handleConfirmDelete = () => {
    // Lakukan logika penghapusan di sini
    setShowDeleteModal(false); // Tutup modal penghapusan setelah penghapusan selesai
  };

  // Fungsi untuk menangani penyimpanan perubahan yang diedit
  const handleSaveChanges = () => {
    // Lakukan logika penyimpanan perubahan di sini
    setShowEditModal(false); // Tutup modal edit setelah penyimpanan perubahan selesai
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

            <div className=" col-auto" onClick={handleEditClick}>
              <img src="assets/edit.svg" alt="edit" />
            </div>
            <div className="col-auto" onClick={handleDeleteClick}>
              <img src="assets/hapus.svg" alt="delete" />
            </div>
          </div>
        </div>
      </section>

      {/* Modal Edit */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header>
          <Modal.Title className="fs-5 fw-bold">
            Tambah dan sematkan ke halaman Anda <br />
            <div className="fw-normal" style={{ fontSize: "12px" }}>
              Sematkan video youtube, instagram post, dan lainnya.
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="fw-normal py-2 mx-1 " style={{ fontSize: "14px" }}>
            Pilih tipe penyematan
          </div>
          <div className="col-auto d-flex">
            <Dropdown onSelect={handleSelect} className="mx-2">
              <Dropdown.Toggle
                variant="white border  fw-bold"
                id="dropdown-basic"
              >
                {selectedPlatform || "youtube"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="youtube">YouTube</Dropdown.Item>
                <Dropdown.Item eventKey="instagram">Instagram</Dropdown.Item>
                <Dropdown.Item eventKey="tiktok">TikTok</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="mb-4 py-2 mx-1">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label"
              style={{ fontSize: "14px" }}
            >
              URL
            </label>
            <input
              type="url"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="http://www."
              required // Opsional, jika Anda ingin membuat input menjadi required
            />
          </div>
        </Modal.Body>

        <Modal.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="none" onClick={handleCloseEditModal}>
            <img src="../assets/kembali.svg" alt="Kembali events" />
          </Button>

          <Button variant="success p-2" onClick={handleSaveChanges}>
            Simpan Perubahan
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Delete */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Penghapusan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda yakin ingin menghapus event ini?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Batal
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditEvent;
