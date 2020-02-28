import React, { useState } from "react";
import "./App.scss";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

const HambergerBtn = ({ onClick }) => {
  return (
    <div onClick={onClick} className="hamberger-btn">
      <div className="line line--1"></div>
      <div className="line line--2"></div>
      <div className="line line--3"></div>
    </div>
  );
};

function App() {
  const [rightColumnOpen, changeRightColumnOpen] = useState(
    window.innerWidth >= 1200 ? true : false
  );

  const handleClick = () => {
    changeRightColumnOpen(!rightColumnOpen);
  };

  return (
    <div className="mainContainer">
      <HambergerBtn onClick={handleClick} />
      <LeftColumn />
      <RightColumn display={rightColumnOpen} />
    </div>
  );
}

export default App;
