import styled from "styled-components";

export const GalleryList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 176px);
  grid-column-gap: 0px;
  grid-row-gap: 8px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 148px);
    grid-column-gap: 18px;
    grid-row-gap: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    grid-template-rows: repeat(2, 282px);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;

export const GalleryItem = styled.li`
  transition: ${p => p.theme.transition};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  } 
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;