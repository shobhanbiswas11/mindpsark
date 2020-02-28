import React from "react";

const DonorUnit = ({ donor }) => {
  return (
    <div className="donorUnit">
      <div className="donorUnit__blood-gorup">{donor.bloodGroup}</div>
      <div className="donorUnit__personal-information">
        <h2 className="donorUnit__personal-information__name h2 b">
          {donor.name}
        </h2>
        <div className="donorUnit__personal-information__state-district">
          <span>{donor.state}</span>, <span>{donor.district}</span>
        </div>
        <div className="donorUnit__personal-information__age">
          Age {donor.age}
        </div>
        {/* <div className="donorUnit__personal-information__contact-info">
          <div className="mobile">{}</div>
        </div> */}
      </div>
    </div>
  );
};

export default DonorUnit;
