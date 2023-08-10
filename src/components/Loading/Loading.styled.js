import styled from '@emotion/styled';

export const FakeGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
  transition: transform var(--animation-duration) var(--timing-function);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background: rgb(152, 153, 154);
  background: linear-gradient(300deg, #595959, #d9d9d9, #444444);
  background-size: 180% 180%;
  animation: gradient-animation 3s ease infinite;

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
