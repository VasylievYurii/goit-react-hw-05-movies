import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 40px;
  justify-content: center;
  @media screen and (min-width: 860px) {
    justify-content: start;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 30px;
    padding-right: 30px;
    gap: 36px;
  }
`;
