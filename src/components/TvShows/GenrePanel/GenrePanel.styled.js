import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const GenreList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
`;

export const GenreName = styled(Link)`
  font-size: 12px;
  color: #8f938f;
`;
