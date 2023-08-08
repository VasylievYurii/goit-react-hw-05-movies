import styled from '@emotion/styled';
import { BsIncognito } from 'react-icons/bs';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;
`;
export const ReviewsWrap = styled.div`
  display: flex;
  gap: 2px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 2px 8px 0px black;
`;
export const AuthorWrap = styled.div`
  background-color: #03001c;
  padding: 20px;
  border-radius: 20px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;
export const PhotoWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;
export const NoPhoto = styled(BsIncognito)`
  width: 100%;
  height: 100%;
`;
export const AuthorName = styled.p`
  padding-top: 20px;
  font-size: 14px;
  max-width: 150px;
  text-align: center;
`;
export const AuthorRating = styled.p`
  font-size: 14px;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fe6d31;
`;
export const ReviewText = styled.p`
  font-size: 12px;
  line-height: 1.6;
  background-color: linear-gradient(
    to right,
    #232526 0%,
    #414345 51%,
    #232526 100%
  );
  padding: 30px;
  padding-left: 20px;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
