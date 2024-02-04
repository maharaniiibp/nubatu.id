import React from 'react'
import dataTable from "../../../data/campaign.json";
import "./campaignProgram.css";

const DataNama = ({ item }) => {
    return (
      <div className="dataNamaContainer">
        <img src={item.photo} alt="" className="fotoNama" />
        <div className="description">
          <div className="title data">{item.title}</div>
          <div className="akses">
            <div className="action edit">
              <img
                className="actionIcon"
                src="./koinNusantara/edit.svg"
                alt=""
              />
              <span>Edit</span>
            </div>
            <div className="action delete">
              <img
                className="actionIcon"
                src="./koinNusantara/trash.svg"
                alt=""
              />
              <span>Delete</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default DataNama