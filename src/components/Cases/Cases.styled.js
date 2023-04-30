import styled from "styled-components";

export const CasesSection = styled.section`
  padding: 56px 0 40px 0;
  text-align: center;
  line-height: 1.375;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 48px 0 40px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 80px 0;
  }
`;

export const CasesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CasesText = styled.p`
  max-width: 220px;
  margin: 0 0 24px 0;
  font-size: 16px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    max-width: 100%;
    font-size: 18px;
  }
`;