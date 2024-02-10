import React, { useState, useEffect } from 'react';
import "./csspages/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGetStarted = () => {
    // Check if both username and password are "nubatu"
    if (user === "nubatu" && password === "nubatu") {
      // Navigate to "/beranda" or perform other actions
      window.location.href = "/beranda";
    } else {
      window.alert("Invalid credentials. Please try again.");
    }
  };
  
//   const [ setToken] = useState("");
// useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       alert("Anda harus login untuk mengakses halaman ini");
//       window.location.href = "/";
// <<<<<<< yasmin
//   }
// }, []);
// =======
//     }
//   }, []);
// >>>>>>> main

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center ">
          <div className="col-lg-6 px-0 d-sm-none d-md-block">
            <img
              src="../assets/login.svg"
              alt="Login image"
              className="login-img vh-100 img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6 text-black">
            <div className="px-4 pt-5 pt-md-0 px-lg-5 mx-lg-5">
              <span className="h1 fw-bold mb-0">
                Selamat Datang di nubatu.id👋
              </span>
              <p className="mt-4" style={{ color: "#667085" }}>
                Meneguhkan Peran Khidmah dan Aktualisasi Visi <br />{" "}
                Multilateral An-Nahdliyyah
              </p>
              <div className="form-outline mb-3 mt-5">
                <label className="form-label fs-6" htmlFor="form2Example18">
                  User
                </label>
                <input
                  type="email"
                  id="form2Example18"
                  className="form-control form-control-lg fs-6"
                  placeholder="nama user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label fs-6" htmlFor="form2Example18">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="form2Example18"
                    className="form-control form-control-lg fs-6"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div className="pt-1">
                  <button
                    className="btn btn-block w-100 text-white fs-6"
                    type="button"
                    style={{ backgroundColor: "#009B4C" }}
                    onClick={handleGetStarted}
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;