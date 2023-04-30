import { HeroSection, HeroTitle, HeroText, HeroButtonText } from "./Hero.styled";
import { ButtonPrimary } from "../buttons/ButtonPrimary";
import { ReactComponent as Arrow } from '../../images/icons/arrow.svg';

export const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroTitle>The Sky Is The Limit</HeroTitle>
      <HeroText>We provide world class financial assistance</HeroText>
      <ButtonPrimary>
        <Arrow />
        <HeroButtonText>Read More</HeroButtonText>
      </ButtonPrimary>
    </HeroSection>
  );
};