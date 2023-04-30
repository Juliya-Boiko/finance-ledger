import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 57px;
  font-size: 18px;
  line-height: 1.38;
  border-radius: 5px;
  overflow: hidden;
  border: none;
  color: ${p => p.theme.colors.brand.white};
  background-color: ${p => p.theme.colors.brand.green};
  transition: ${p => p.theme.transition};
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.complementary.green};
  }
  svg {
    fill: ${p => p.theme.colors.brand.white};
  }
`;

export const ButtonPrimary = ({ children }) => {
  return (
    <Button type='button'>{children}</Button>
  );
};