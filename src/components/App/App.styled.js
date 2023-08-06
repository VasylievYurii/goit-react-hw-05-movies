import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #23222a;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 80px;
  }
`;

export const Logo = styled(Link)``;

export const LogoText = styled.p`
  color: #fe6d31;
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const LogoTextSecond = styled.span`
  color: #fff;
`;

export const Menu = styled.ul`
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

export const List = styled(NavLink)`
  color: #fff;
`;

export const Container = styled.div`
  max-width: 1440px;
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
