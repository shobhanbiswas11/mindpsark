import React from "react";
import FindSection from "./FindSection";
const LogoSection = () => {
  return (
    <h1 className="h1 logo">
      <span className="thin">Find A </span>
      <span className="color">Blood Donor</span>
    </h1>
  );
};

const LeftColumn = () => {
  return (
    <div className="column column--left">
      <LogoSection />
      <FindSection />
    </div>
  );
};

export default LeftColumn;
