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
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const StyledInput = styled.input`
  border: 1px solid #bfc5cd;
  width: 30%;
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
  &:focus {
    border: 1px solid #bfc5cd;
    color: #4a4a4a;
    box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
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
  ${({ focusMode }) =>
    focusMode &&
    css`
      bottom: 59px;
      left: 11px;
    `}
`;
export const Ul = styled.ul`
  list-style-type: none;
  width: 30%;
  height: 350px;
  overflow-y: scroll;
  padding: 0px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  margin: 0;
`;
export const Li = styled.li`
  margin: 10px;
  cursor: pointer;
  padding: 10px;
  color: #bfc5cd;
  transition: 0.3s;
  &:hover {
    color: #798697;
    line-height: 30px;
    background-color: #fff;
    box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
  }
`;
