import styled from '@emotion/styled';

const backgroundImage = ({ image }) => `http://image.tmdb.org/t/p/w500${image}`;

// const setTypeColor = ({ colorType }) =>
//   colorType === 'movie' ? 'blue' : 'green';

export const Section = styled.section`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  background-image: linear-gradient(
      to top,
      rgba(35, 34, 42, 0.9),
      rgba(45, 43, 54, 0.9)
    ),
    url(${backgroundImage});
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.3);
  z-index: -1;
  @media screen and (min-width: 1440px) {
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

export const UpcomingListUl = styled.ul`
  display: flex;
  gap: 20px;
`;
