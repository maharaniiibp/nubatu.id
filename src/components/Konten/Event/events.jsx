import React from "react";
import { Link } from "react-router-dom"; 


const Events = () => {
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
          <div class="row border-0 rounded p-4 bg-light">
            <div
              class="col-auto me-auto fw-bold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <img src="assets/youtube.png" alt="edit" className="mx-2" />
              Youtube Video
            </div>
           
            <div class="col-auto">
              <Link to="/edit"> 
              <img src="assets/edit.svg" alt="edit" />            
              </Link>
            </div>
           
          </div>
        </div>
      </section>

      <section className="tiga">
        <div className="px-5">
          <div class="row border-0 rounded p-4 bg-light">
            <div
              class="col-auto me-auto fw-bold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <img src="assets/ig.png" alt="edit" className="mx-2" />
               Instagram Post 
            </div>
            <div class="col-auto">
              <Link to="/edit"> 
              <img src="assets/edit.svg" alt="edit" />            
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="empat">
        <div className="px-5 py-5">
          <div class="row border-0 rounded p-4 bg-light">
            <div
              class="col-auto me-auto fw-bold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <img src="assets/ig.png" alt="edit" className="mx-2" />
              Instagram Post 
            </div>
            <div class="col-auto">
              <Link to="/edit"> 
              <img src="assets/edit.svg" alt="edit" />            
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
