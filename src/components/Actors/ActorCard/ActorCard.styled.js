import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardWrapper = styled(Link)`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: auto;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Poster = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: white;
  padding-top: 10px;
  max-width: 80%;
`;
