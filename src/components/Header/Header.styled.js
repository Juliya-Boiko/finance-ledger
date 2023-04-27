import styled from "styled-components";

export const HeaderSection = styled.header`
  padding: 22px 0 0 0;
  color: ${p => p.theme.colors.brand.white};
  background-color: lightgreen;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 16px 0 0 0;
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
  }
  span {
    margin: 0 8px;
    color: ${p => p.theme.colors.brand.green};
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
      width: 150%;
      height: 2px;
      position: absolute;
      bottom: -10px;
      left: -25%;
      background-color: ${p => p.theme.colors.brand.green};
    }
  }
  
  &:not(:last-child) {
    margin: 0 20px 0 0;
  }
`;