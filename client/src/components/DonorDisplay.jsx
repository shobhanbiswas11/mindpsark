import React from "react";
import DonorUnit from "./DonorUnit";

const DonorDisplay = ({ donors }) => {
  const renderView = () => {
    if (donors.length === 0) {
      return (
        <div className="donor-display-area__msg">
          Input required Blood Group
        </div>
      );
    }
    return donors.map((donor, i) => {
      return <DonorUnit key={i} donor={donor} />;
    });
  };

  return <div className="donor-display-area">{renderView()}</div>;
};

export default DonorDisplay;
