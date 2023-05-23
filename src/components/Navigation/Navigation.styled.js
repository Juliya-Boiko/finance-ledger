import styled from "styled-components";

export const NavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    justify-content: flex-end;
  }
`;

export const NavigationLink = styled.a`
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