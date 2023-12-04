import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;

  background-color: #f0f2f5;
  border: none;

  &:focus,
  &:not(:placeholder-shown) {
    border-color: #046ee5;
    box-shadow: 0 0 5px rgba(4, 110, 229, 0.7);
  }
`;
