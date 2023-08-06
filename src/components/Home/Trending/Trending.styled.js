import styled from '@emotion/styled';

export const TrendingTitle = styled.h2`
  position: relative;
  padding-bottom: 10px;
  color: white;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-image: linear-gradient(to right, #2d2b36, transparent);
  }
`;

export const TrendingList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 10px;
`;
