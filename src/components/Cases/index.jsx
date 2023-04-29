import { CasesSection, CasesContent, CasesText, CasesTitle } from "./Cases.styled";
import { Container } from "../../styles/common/Container.styled";
import { Gallery } from "../Gallery";

export const Cases = () => {
  return (
    <CasesSection>
      <Container>
        <CasesContent>
          <CasesText>This is what we do</CasesText>
          <CasesTitle>Business Cases</CasesTitle>
          <CasesText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</CasesText>
          <Gallery />
        </CasesContent>
      </Container>
    </CasesSection>
  );
};