import styled from "styled-components";

export const LogoContainer = styled.a`
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