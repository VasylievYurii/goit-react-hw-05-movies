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
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  max-width: 420px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 860px) {
    max-width: 860px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const FakeGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const FakeItemCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  position: relative;
  background: rgba(143, 147, 143, 0.5);
  /* border-radius: 0.375em; */
  transition: transform var(--animation-duration) var(--timing-function);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.03);
  }

  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
