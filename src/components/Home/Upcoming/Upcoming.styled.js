import styled from '@emotion/styled';

const backgroundImage = ({ image }) =>
  image ? `http://image.tmdb.org/t/p/w500${image}` : '';

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
  @media screen and (min-width: 1440px) {
  }
`;
