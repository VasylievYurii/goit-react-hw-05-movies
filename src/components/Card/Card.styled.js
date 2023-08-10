import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import { TbMovie } from 'react-icons/tb';

const setTypeColor = ({ colorType }) =>
  colorType === 'movie' ? 'rgba(68,119,206,0.8)' : 'rgba(234,17,121,0.8)';

export const CardWrapper = styled(NavLink)`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
`;

export const Poster = styled.img`
  width: 100%;
`;

export const NoPoster = styled(TbMovie)`
  width: 100%;
  height: 100%;
  stroke: white;
`;

export const RatingWrap = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 32px;
  height: 32px;
`;

export const Star = styled(BsFillStarFill)`
  width: 100%;
  height: 100%;
  fill: orange;
  opacity: 85%;
`;

export const Rating = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  font-size: 10px;
  font-weight: 600;
  color: white;
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
