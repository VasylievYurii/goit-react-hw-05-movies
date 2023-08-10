import styled from '@emotion/styled';

export const Title = styled.h2`
  color: #fe6d31;
  padding-top: 20px;
  padding-bottom: 5px;
  position: relative;
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
export const Tagline = styled.p`
  padding-bottom: 20px;
  color: #8f938f;
  font-size: 14px;
`;
export const MainWrapper = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  flex-direction: column;

  @media screen and (min-width: 860px) {
    flex-direction: row;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -20px;
    height: 2px;
    width: 100%;
    background-image: linear-gradient(to right, #2d2b36, transparent);
  }
`;
export const ImageWrapper = styled.div``;
export const Poster = styled.img``;
export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 8px 0px black;
`;
export const Rating = styled.p``;
export const Release = styled.p``;
export const Country = styled.p``;
export const Budget = styled.p``;
export const Genre = styled.p``;
export const Runtime = styled.p``;
export const Span = styled.span`
  color: var(--second-color);
`;
export const Overview = styled.p`
  max-width: 600px;
`;

export const LinksWrap = styled.ul`
  display: flex;
  gap: 20px;
`;
