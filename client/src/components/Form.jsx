import React from "react";
import InputTemplate from "./InputTemplate";

const Form = ({
  children,
  inputValues,
  onSubmit,
  inputs,
  onChange,
  className,
  inputSuggetion = [],
  onBlur,
  onFocus,
  error
}) => {
  const handleSubmitLocally = e => {
    onSubmit(e);
  };

  const inputGroup = [];
  const renderInputTemplate = (inp, i) => {
    return (
      <InputTemplate
        onChange={onChange}
        name={inp.name}
        key={i}
        placeholder={inp.placeholder}
        suggetions={inputSuggetion[inp.name]}
        value={inputValues[inp.name]}
        onBlur={onBlur}
        error={error[inp.name]}
        onFocus={onFocus || (() => {})}
        size={inp.size}
      />
    );
  };
  return (
    <form onSubmit={handleSubmitLocally} className={`form ${className}`}>
      {inputs.map((inp, i) => {
        if (inp.group) {
          inputGroup.push(renderInputTemplate(inp, i));
          if (inp.group === "end") {
            return (
              <div key={i} className="input-container-group">
                {inputGroup}
              </div>
            );
          }
          return null;
        }
        return renderInputTemplate(inp, i);
      })}
      {children}
    </form>
  );
};

export default Form;
