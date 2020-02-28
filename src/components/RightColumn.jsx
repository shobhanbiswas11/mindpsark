import React from "react";
import RegistrationSection from "./RegistrationSection";
import Navigation from "./Navigation";

const RightColumn = ({ display }) => {
  return (
    <div className={`column column--right ${!display && "RightSectionHidden"}`}>
      <Navigation />
      <RegistrationSection />
    </div>
  );
};

export default RightColumn;
