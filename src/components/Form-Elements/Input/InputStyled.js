import styled, { css } from "styled-components";
export const Icon = styled.i`
  position: relative;
  z-index: 3;
  color: #7b7b7b;
  width: 0;
  ${(props) =>
    props.rightIcon &&
    css`
      left: -25px;
      top: 1px;
    `}
  ${(props) =>
    props.leftIcon &&
    css`
      left: 11px;
      top: 1px;
    `}
`;
export const Form = styled.form`
  position: relative;
`;
export const StyledInput = styled.input`
  border: 1px solid #bfc5cd;
  color: #798697;
  padding: 13px 33px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    border: 1px solid #4a4a4a;
    color: #798697;
  }
  &::-webkit-calendar-picker-indicator {
    opacity: 100;
  }
`;
export const Label = styled.label`
  position: absolute;
  z-index: 1;
  font-size: 14px;
  font-weight: bold;
  color: #807d7de3;
  font-family: monospace;
  transition: 0.3s;
  color: #798697;
  bottom: 22px;
  left: 31px;
  &&.label-focus-mode {
    bottom: 59px;
    left: 11px;
  }
`;
