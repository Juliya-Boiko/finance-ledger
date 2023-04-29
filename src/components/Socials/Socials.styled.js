import styled from "styled-components";

export const SocialsList = styled.ul`
  width: 216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialItem = styled.li`
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