import styled from "styled-components";
import { keyframes } from 'styled-components'

const smoothScroll = keyframes`
  0% { transform: translateY(-80px); }
  100% { transform: translateY(0px); }
`;

export const HeaderSection = styled.header`
  width: 100%;
  position: ${p => p.sticky ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  z-index: 20;
  padding: 22px 0;
  color: ${p => p.theme.colors.brand.white};
  transition: ${p => p.theme.transition};
  animation: ${smoothScroll} 0.5s forwards;
  background-color: ${p => p.sticky ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 16px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 32px 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px 0;
  font-size: 28px;
  line-height: 1.357;
  transition: ${p => p.theme.transition};
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin: 0;
    font-size: 35px;
  }
  &:hover {
    transform: scale(1.05);
    span {
      color: ${p => p.theme.colors.brand.green};
    }
  }
  span {
    margin: 0 8px;
    color: ${p => p.theme.colors.complementary.green};
    transition: ${p => p.theme.transition};
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 16px;
  line-height: 1.375;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
  &:hover {
    &::after {
      content: '';
      display: block;
      width: 110%;
      height: 2px;
      position: absolute;
      bottom: -10px;
      left: -5%;
      background-color: ${p => p.theme.colors.brand.green};
    }
  }
  &:not(:last-child) {
    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
      margin: 0 20px 0 0;
    }
    @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
      margin: 0 40px 0 0;
    }
  }
`;