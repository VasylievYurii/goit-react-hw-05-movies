import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { HiArrowCircleUp } from 'react-icons/hi';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
`;

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
  @media screen and (min-width: 860px) {
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
  &.active {
    color: #fe6d31;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
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

export const ScrollUp = styled(HiArrowCircleUp)`
  width: 50px;
  height: 50px;
  fill: white;
  transition: fill 0.3s ease;
  &:hover {
    fill: #fe6d31;
  }
`;
