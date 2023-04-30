import styled from "styled-components";
import { ReactComponent as Arrow } from '../../images/icons/back.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  padding: 0;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.complementary.green};
  background-color: transparent;
  transition: ${p => p.theme.transition};
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonModal = ({title, onClick}) => {
  return (
    <Button type='button' onClick={onClick}><Arrow /> {title}</Button>
  );
};
