import styled from "styled-components";

export const TeamSection = styled.section`
  padding: 72px 0 50px 0;
  text-align: center;
  line-height: 1.375;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 50px 0 40px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding: 80px 0 88px 0;
  }
`;

export const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamSubtitle = styled.p`
  margin: 0 0 16px 0;
  font-size: 16px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;

export const TeamTitle = styled.h2`
  margin: 0 0 24px 0;
  font-size: 32px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 40px;
  }
`;

export const TeamText = styled.p`
  margin: 0 0 63px 0;
  font-size: 16px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin: 0 0 24px 0;
    font-size: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 36px 0;
  }
`;

export const TeamList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 30px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 18px;
    grid-row-gap: 0px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-column-gap: 20px;
  }
`;

export const TeamItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const TeamWrapper = styled.div`
  position: relative;
  margin: 0 0 16px 0;
  transition: ${p => p.theme.transition};
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin: 0 0 18px 0;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 0 15px 0;
  }
  &:hover {
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }
  }
`;

export const TeamLayout = styled.div`
  display: none;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  transition: ${p => p.theme.transition};
`;

export const TeamPhoto = styled.img`
  width: 100%;
  height: 186px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 148px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    height: 287px;
  }
`;

export const TeamName = styled.p`
  margin: 0 0 8px 0;
  font-size: 20px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`;

