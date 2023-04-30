import styled from "styled-components";

export const SectionTitle = styled.h2`
  max-width: ${p => p.maxWidth};
  margin: 0 0 24px 0;
  font-weight: ${p => p.theme.fontWeight.regular};
  font-size: 32px;
  color: inherit;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    max-width: 100%;
    font-size: 40px;
  }
`;