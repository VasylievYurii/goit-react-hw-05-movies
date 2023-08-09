import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  /* min-height: 85vh; */
  /* background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    #b1d8ef 0.1%,
    #d0e3f3 94.2%
  ); */

  /* @media screen and (min-width: 768px) {  } */
  @media screen and (min-width: 1440px) {
    /* height: 100vh; */
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Title = styled.h2`
  color: #fe6d31;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 15px;
    height: 2px;
    width: 100%;
    background-image: linear-gradient(to right, #2d2b36, transparent);
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
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
export const FirstRelease = styled.p``;
export const LastRelease = styled.p``;
export const NumberOfSeasons = styled.p``;
export const NumberOfEpisodes = styled.p``;
export const Country = styled.p``;
export const Genre = styled.p``;
export const Overview = styled.p`
  max-width: 600px;
`;

export const LinksWrap = styled.ul`
  display: flex;
  gap: 20px;
`;