import styled from "styled-components";

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin: 0 25px 0 0;
  }
  &:hover {
    svg {
      fill: ${p => p.theme.colors.brand.green};
    }
  }
  svg {
    transition: ${p => p.theme.transition};
    fill: ${p => p.theme.colors.brand.white};
  }
`;