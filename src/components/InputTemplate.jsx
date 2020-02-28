import React, { useState } from "react";

const InputTemplate = ({
  value,
  suggetions,
  placeholder,
  onChange,
  name,
  size,
  onBlur,
  onFocus,
  error
}) => {
  const [isFocused, changeIsFocused] = useState(false);

  const handleChangeLocally = e => {
    onChange(e);
  };

  const suggetionClicked = e => {
    onChange(e, {
      name: name,
      value: e.target.textContent
    });
  };

  const handleBlurLocally = e => {
    changeIsFocused(false);
    onBlur(e);
  };

  const handleFocusLocally = e => {
    changeIsFocused(true);
    onFocus(e);
  };

  return (
    <div
      className={`input-container ${
        size === "small" ? "input-container--small" : ""
      } ${size === "x-small" ? "input-container--x-small" : ""}`}
    >
      <div className="input-container__error">{!isFocused && error}&nbsp;</div>
      <input
        name={name}
        className={`input-container__input ${
          error && !isFocused ? "error-state" : ""
        }`}
        type="text"
        placeholder={placeholder}
        onChange={handleChangeLocally}
        value={value}
        onBlur={handleBlurLocally}
        autoComplete="off"
        onFocus={handleFocusLocally}
      />
      <div
        style={{ display: !suggetions && "none" }}
        className="input-container__suggetionBox"
      >
        <ul>
          {(suggetions || []).map((s, i) => {
            return (
              <li key={i} onMouseDown={suggetionClicked}>
                {s}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InputTemplate;
