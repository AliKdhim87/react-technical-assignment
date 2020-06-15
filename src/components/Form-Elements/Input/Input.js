import React, { useState } from "react";
import { StyledInput, Label, Icon, Form } from "./InputStyled";

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
      <StyledInput
        list="search"
        className={` ${props.className}`}
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
      <StyledInput
        className={`${props.className}`}
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
      <Form onSubmit={props.onSubmit}>
        <Label
          style={props.style}
          htmlFor={props.id}
          className={inputStyle ? "label-focus-mode" : ""}
        >
          {props.label}
        </Label>
        <Icon leftIcon className={`fas  ${props.left_icon}`}></Icon>
        {element}

        <Icon rightIcon className={`fas ${props.right_icon}`}></Icon>
      </Form>

      <datalist id="search">
        {props.data &&
          props.data
            .sort((a, b) => a.name !== null && a.name.localeCompare(b.name))
            .map((user, index) => <option key={index} value={user.name} />)}
      </datalist>
    </>
  );
};

export { Input };
