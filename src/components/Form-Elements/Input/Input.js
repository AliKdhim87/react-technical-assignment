import React, { useState } from "react";

import "./Input.css";
const Input = (props) => {
  const [inputStyle, setInputStyle] = useState(false);

  const inputStyleHandlerOnfocus = () => {
    setInputStyle(true);
  };

  const inputStyleHandlerOnblur = () => {
    setInputStyle(false);
  };

  const element =
    props.name === "search" ? (
      <input
        list="ali"
        className={`input ${props.className}`}
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={inputStyle ? props.placeholder : ""}
        onChange={props.onChange}
        onBlur={props.onBlur || inputStyleHandlerOnblur}
        onFocus={props.onFocus || inputStyleHandlerOnfocus}
        value={props.value}
        onClick={props.onClick}
        autoComplete={props.autoComplete}
      />
    ) : (
      <input
        className={`input ${props.className}`}
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={inputStyle ? props.placeholder : ""}
        onChange={props.onChange}
        onBlur={props.onBlur || inputStyleHandlerOnblur}
        onFocus={props.onFocus || inputStyleHandlerOnfocus}
        value={props.value}
        onClick={props.onClick}
        autoComplete={props.autoComplete}
      />
    );

  return (
    <>
      <div className="form">
        <label
          style={props.style}
          htmlFor={props.id}
          className={inputStyle ? "label-focus-mode" : ""}
        >
          {props.label}
        </label>
        <i
          className={`fas ${inputStyle ? "left-icon" : "hide"} ${
            props.left_icon
          }`}
        ></i>
        {element}

        <i className={`fas right-icon ${props.right_icon}`}></i>
      </div>

      <datalist id="ali">
        {props.data &&
          props.data
            .sort((a, b) => a.name !== null && a.name.localeCompare(b.name))
            .map((user, index) => <option key={index} value={user.name} />)}
      </datalist>
    </>
  );
};

export { Input };
