import styled from "styled-components";

export const SearchBarForm = styled.form`
  display: flex;
  background-color: white;
  width: 100%;
  max-width: 350px;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  gap: 13px;
  padding-right: 13px;
  border-radius: 20px;
`;

export const SearchBarInput = styled.input`
  padding: 13px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 0.8rem;
  font-weight: 500px;
  border-right: 1px solid #ddd;
  border-radius: 20px 0px 00px 20px;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;
