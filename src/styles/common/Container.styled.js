import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    width: ${p => p.theme.breakpoints.mobile};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: ${p => p.theme.breakpoints.tablet};
    padding: 0 32px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.theme.breakpoints.desktop};
    padding: 0 28px;
  }
`;