import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const setTypeColor = ({ colorType }) =>
  colorType === 'movie' ? 'blue' : 'green';

export const CardWrapper = styled(Link)`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Poster = styled.img`
  width: 100%;
`;

export const Rating = styled.p`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 14px;
  font-weight: 600;
  color: black;
  background-color: gold;
  border: 5px solid gold;
  border-radius: 50%;
`;

export const Type = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  font-weight: 600;
  color: white;
  background-color: ${setTypeColor};
  border-bottom-left-radius: 10px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: white;
  padding-top: 10px;
  max-width: 80%;
`;
export const Date = styled.p`
  font-size: 12px;
  color: #8f938f;
`;
