import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${p => p.theme.colors.brand.black};
  color: ${p => p.theme.colors.brand.white};
`;

export const FooterText = styled.p`
  margin: 12px 0 0 0;
  font-size: 16px;
  line-height: 1.375;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;