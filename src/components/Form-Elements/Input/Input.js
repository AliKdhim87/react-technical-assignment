import React, { useState } from 'react';

import './Input.css';
const Input = (props) => {
  const [inputStyle, setInputStyle] = useState(false);
  const inputStyleHandlerOnfocus = () => {
    setInputStyle(true);
  };
  const inputStyleHandlerOnblur = () => {
    setInputStyle(false);
  };
  const element = (
    <input
      className={`input ${props.className}`}
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={inputStyle ? props.placeholder : ''}
      onChange={props.onChange}
      onBlur={props.onBlur || inputStyleHandlerOnblur}
      onFocus={props.onFocus || inputStyleHandlerOnfocus}
      value={props.value}
      onClick={props.onClick}
    />
  );

  return (
    <form onSubmit={props.onSubmit}>
      <label
        style={props.style}
        htmlFor={props.id}
        className={
          element.props.value !== '' || inputStyle ? 'label-focus-mode' : ''
        }
      >
        {props.label}
      </label>
      <i
        className={`fas ${inputStyle ? 'left-icon' : 'hide'} ${
          props.left_icon
        }`}
      ></i>
      {element}

      <i className={`fas right-icon ${props.right_icon}`}></i>
    </form>
  );
};

export { Input };
