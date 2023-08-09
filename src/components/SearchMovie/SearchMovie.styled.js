import styled from '@emotion/styled';
import { BiSearchAlt } from 'react-icons/bi';

export const Form = styled.form`
  display: flex;
  height: 40px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 300px;
  font-size: 18px;
  color: white;
  background-color: #2d2b36;
  border: none;
  padding: 10px;
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
  &::placeholder {
    /* font-size: 12px; */
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const Button = styled.button`
  background-color: #fe6d31;
  border: none;
  cursor: pointer;
  position: relative;
  height: 100%;
  padding: 0;
  display: inline-block;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: orangered;
  }
`;

export const Icon = styled(BiSearchAlt)`
  fill: white;
  padding: 0;
  width: 90%;
  height: 90%;
`;
