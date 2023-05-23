import { NavigationContainer, NavigationLink } from "./Navigation.styled";

export const Navigation = ({ onClick }) => {
  return (
    <NavigationContainer>
      <NavigationLink href="#home" onClick={onClick}>Home</NavigationLink>
      <NavigationLink href="#about" onClick={onClick}>About</NavigationLink>
      <NavigationLink href="#cases" onClick={onClick}>Cases</NavigationLink>
      <NavigationLink href="#blog" onClick={onClick}>Blog</NavigationLink>
      <NavigationLink href="#contact" onClick={onClick}>Contact</NavigationLink>
    </NavigationContainer>
  );
};