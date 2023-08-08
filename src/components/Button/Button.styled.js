import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  background-image: linear-gradient(
    to right,
    #485563 0%,
    #29323c 51%,
    #485563 100%
  );
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* box-shadow: 0 0 20px #eee; */
  border-radius: 10px;
  display: block;
  cursor: pointer;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
