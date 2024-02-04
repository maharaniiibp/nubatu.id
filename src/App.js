// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar"
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home"
import Konten from "./pages/konten"
import Koin from "./pages/koin"
import Layout from "./pages/layout"
import Navbar from "./components/Navbar"
// import Konten from "./pages/konten"

// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/konten",
//     element: <Konten />,
//   },
//   {
//     path: "/koin",
//     element: <Koin />,
//   },
// ])
function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      {/* <Sidebar /> */}
      {/* <Navbar /> */}
      {/* <div className="container"> */}
         <Routes>
        <Route path="/" Component={Home} />
        <Route path="/konten" Component={Konten} />
        <Route path="/koin" Component={Koin} />
        </Routes>
         {/* </div> */}
      </div>
  );
}

export default App;
