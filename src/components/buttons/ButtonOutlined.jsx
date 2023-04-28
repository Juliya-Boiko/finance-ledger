import styled from "styled-components";

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
  }
`;

export const ButtonOutlined = ({ children, accent }) => {
  return (
    <Button type='button' accent={accent}>{children}</Button>
  );
};