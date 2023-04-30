import styled from "styled-components";
import bgiJpg1x from '../../images/home/blog.jpg';
import bgiJpg2x from '../../images/home/blog@2x.jpg';
import bgiWebP1x from '../../images/home/blog.webp';
import bgiWebP2x from '../../images/home/blog@2x.webp';

export const BlogSection = styled.section`
  color: ${p => p.theme.colors.brand.white};
  background-color: ${p => p.theme.colors.complementary.blue};
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const BlogImage = styled.div`
  height: 220px;
  background-color: #000000;
  background-image: url(${bgiJpg1x});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @supports (background-image: url(${bgiWebP1x})) {
    background-image: url(${bgiWebP1x});
  }
  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
    background-image: url(${bgiJpg2x});
    @supports (background-image: url(${bgiWebP2x})) {
      background-image: url(${bgiWebP2x});
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    min-width: 368px;
    height: auto;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    min-width: 670px;
  }
`;

export const BlogContent = styled.div`
  padding: 80px 20px;
  line-height: 1.375;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 62px 32px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 80px 28px 86px 20px;
  }
`;

export const BlogText = styled.p`
  margin: 0 0 24px 0;
  font-size: 16px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;