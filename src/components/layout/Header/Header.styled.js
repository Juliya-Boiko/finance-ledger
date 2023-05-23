import styled from "styled-components";
import { smoothScroll } from "../../../styles/common/keyframes.styled";

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