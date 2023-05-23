import styled from "styled-components";
import bgiJpg1x from '../../../images/home/showcase.jpg';
import bgiJpg2x from '../../../images/home/showcase@2x.jpg';
import bgiWebP1x from '../../../images/home/showcase.webp';
import bgiWebP2x from '../../../images/home/showcase@2x.webp';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 20px 104px 20px;
  text-align: center;
  color: ${p => p.theme.colors.brand.white};
  background-color: #000000;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgiJpg1x});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @supports (background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgiWebP1x})) {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgiWebP1x});
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgiJpg2x});
      @supports (background-image: url(${bgiWebP2x})) {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgiWebP2x});
      }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 1024px;
    padding: 0;
    justify-content: center;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
     height: 768px;
  }
`;

export const HeroTitle = styled.h1`
  width: 240px;
  margin: 0 0 16px 0;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 40px;
  line-height: 1.35;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 100%;
    font-size: 55px;
  }
`;

export const HeroText = styled.p`
  margin: 0 0 24px 0;
  font-size: 26px;
  line-height: 1.23;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 520px;
    font-size: 40px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

export const HeroButtonText = styled.span`
  margin: 0 0 0 8px;
`;