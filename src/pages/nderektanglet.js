import React from "react";
import Tabeltanglet from "../components/nderek tanglet/tabeltanglet";
import NavNderek from "../components/nderek tanglet/navnderek";

const NderekTanglet = () => {
  return (
    <>
    <div className="py-5"> 
    <section className="satu ">
        <NavNderek />
      </section>

      <section className="tiga">
        <Tabeltanglet />
      </section>
    </div>
      
    </>
  );
};

export default NderekTanglet;
