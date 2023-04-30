import styled from "styled-components";
import { ReactComponent as Arrow } from '../../images/icons/arrow.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 54px;
  font-size: 16px;
  line-height: 1.375;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${p => p.theme.colors.brand.white};
  color: ${p => p.theme.colors.brand.white};
  background-color: transparent;
  transition: ${p => p.theme.transition};
  cursor: pointer;
  &:hover {
    border-color: ${p => p.accent};
    color: ${p => p.accent};
    background-color: ${p => p.theme.colors.brand.white};
    svg {
      fill: ${p => p.accent};
    }
  }
  svg {
    margin: 0 5px 0 0;
    fill: ${p => p.theme.colors.brand.white};
    transition: ${p => p.theme.transition};
  }
`;

export const ButtonOutlined = ({ children, accent }) => {
  return (
    <Button type='button' accent={accent}><Arrow />{children}</Button>
  );
};