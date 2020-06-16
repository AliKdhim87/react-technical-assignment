import React, { useState, useEffect, useRef } from "react";
import { StyledInput, Label, Icon, Wrapper, Ul, Li } from "./InputStyled";
import { filterUsers } from "../../../utils/filter";
const Input = (props) => {
  const [inputStyle, setInputStyle] = useState(false);
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);
  const inputStyleHandlerOnfocus = () => {
    setInputStyle(true);
  };

  const inputStyleHandlerOnblur = () => {
    if (search !== "") {
      return setInputStyle(true);
    }
    setInputStyle(false);
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };
  console.log(display);
  return (
    <>
      <Wrapper>
        {inputStyle ? <Icon leftIcon className="fas fa-search" /> : ""}
        <StyledInput
          type={props.type}
          placeholder={inputStyle ? props.placeholder : ""}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={inputStyleHandlerOnblur}
          onFocus={inputStyleHandlerOnfocus}
          onClick={(e) => setDisplay(true)}
          value={search}
          autoComplete="off"
        />
        <Icon rightIcon className="fas fa-sort-down " />
        {inputStyle ? (
          <Label focusMode>{props.label}</Label>
        ) : (
          <Label>{props.label}</Label>
        )}
      </Wrapper>
      {display && (
        <Ul ref={wrapperRef}>
          {filterUsers(props.data, search).length <= 0 ? (
            <Li>There is no match</Li>
          ) : (
            filterUsers(props.data, search)
              .sort((a, b) => a.name !== null && a.name.localeCompare(b.name))
              .map(
                (user, index) =>
                  user.name !== null && (
                    <Li
                      key={index}
                      onClick={(e) => {
                        setSearch(user.name);
                        setInputStyle(true);
                        setDisplay(false);
                      }}
                    >
                      {user.name}
                    </Li>
                  )
              )
          )}
        </Ul>
      )}
    </>
  );
};

export { Input };
