import styled from '@emotion/styled';
import { Rings } from 'react-loader-spinner';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  z-index: 1;
`;

export const StyledRings = () => {
  return (
    <Rings
      height="80"
      width="80"
      color="#fe6d31"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};
