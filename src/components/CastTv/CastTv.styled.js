import styled from '@emotion/styled';
import { RxPerson } from 'react-icons/rx';

export const ActorsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 20px;
`;
export const ActorWrapper = styled.div``;
export const Photo = styled.img`
  width: 100px;
  border-radius: 5px;
`;
export const PhotoWrap = styled.div`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  padding-bottom: 10px;
`;
export const NoPhoto = styled(RxPerson)`
  width: 100%;
  height: 100%;
`;
export const Name = styled.p`
  max-width: 100px;
  font-size: 12px;
  padding-bottom: 5px;
`;
export const Character = styled.p`
  font-size: 10px;
  max-width: 100px;
  color: #8f938f;
`;
