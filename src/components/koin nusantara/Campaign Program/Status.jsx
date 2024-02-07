import React, { useEffect, useState } from "react";
import dataTable from "../../../data/campaign.json";
import "../../css/koinNusantara/campaignProgram.css";

const Status = ({ status }) => {
    let button = null;
    if (status) {
        const lowerCaseStatus = status.toLowerCase();
    
        if (lowerCaseStatus === "disetujui") {
          button = (
            <button className="setuju">
              <div className="dot"></div>
              <span>{lowerCaseStatus}</span>
            </button>
          );
        } else if (lowerCaseStatus === "pengajuan") {
          button = (
            <button className="pengajuan">
              <div className="dot"></div>
              <span>{lowerCaseStatus}</span>
            </button>
          );
        } else if (lowerCaseStatus === "ditolak") {
          button = (
            <button className="tolak">
              <div className="dot"></div>
              <span>{lowerCaseStatus}</span>
            </button>
          );
        }
      }
    
      return <div className="statusColor">{button}</div>;
};
    
export default Status;
