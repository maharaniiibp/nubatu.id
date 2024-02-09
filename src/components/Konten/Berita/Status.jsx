import React from 'react'
import "../../css/konten/berita.css";

const Status = ({status}) => {
    let button = null;
    if (status) {
        const lowerCaseStatus = status.toLowerCase();
    
        if (lowerCaseStatus === "draft") {
          button = (
            <button className="draft">
              <div className="dot"></div>
              <span>{lowerCaseStatus}</span>
            </button>
          );
        } else if (lowerCaseStatus === "publish") {
          button = (
            <button className="publish">
              <div className="dot"></div>
              <span>{lowerCaseStatus}</span>
            </button>
          );
        }
      }
    
      return <div className="statusColor">{button}</div>;
}

export default Status
