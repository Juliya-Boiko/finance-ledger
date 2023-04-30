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
      fill: ${p => p.colored ? p.theme.colors.brand.green : 'rgba(255, 255, 255, 0.5)'};
    }
  }
  svg {
    transition: ${p => p.theme.transition};
    fill: ${p => p.theme.colors.brand.white};
  }
`;