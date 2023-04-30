import styled from "styled-components";
import { Form, Field } from "formik";
import bgiJpg1x from '../../images/home/contact.jpg';
import bgiJpg2x from '../../images/home/contact@2x.jpg';
import bgiWebP1x from '../../images/home/contact.webp';
import bgiWebP2x from '../../images/home/contact@2x.webp';

export const CallbackSection = styled.section`
  background-color: ${p => p.theme.colors.grayScale.gray1};
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const CallbackImage = styled.div`
  height: 220px;
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

export const CallbackContent = styled.div`
  padding: 50px 20px 25px 20px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    flex-grow: 1;
    padding: 32px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 56px 28px 77px 20px;
  }
`;

export const CallbackForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const CallbackLabel = styled.label`
  position: relative;
  margin: 0 0 24px 0;
`;

export const CallbackInput = styled(Field)`
  width: 100%;
  padding: 16px 8px;
  background-color: ${p => p.theme.colors.brand.white};
  border: 1px solid ${p => p.theme.colors.grayScale.gray3};
  border-radius: 5px;
  overflow: hidden;
  outline: none;
  &:focus + span {
    top: -20px;
    transform: translateY(0);
  }
`;

export const CallbackLegend = styled.span`
  position: absolute;
  top: ${p => p.value ? '-20px' : '50%'};
  left: 8px;
  transform: translateY(${p => p.value ? 0 : '-50%'});
  font-size: 16px;
  color: ${p => p.theme.colors.grayScale.gray2};
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const CallbackError = styled.div`
  position: absolute;
  left: 8px;
  bottom: -20px;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.complementary.red};
  span {
    margin: 0 0 0 10px;
  }
`;