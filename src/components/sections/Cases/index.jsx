import { CasesSection, CasesContent, CasesText } from "./Cases.styled";
import { Container } from "../../../styles/common/Container.styled";
import { SectionTitle } from "../../../styles/common/SectionTitle.styled";
import { Gallery } from "../../../components/Gallery";

export const Cases = () => {
  return (
    <CasesSection id="cases">
      <Container>
        <CasesContent>
          <CasesText>This is what we do</CasesText>
          <SectionTitle maxWidth="220px">Business Cases</SectionTitle>
          <CasesText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</CasesText>
          <Gallery />
        </CasesContent>
      </Container>
    </CasesSection>
  );
};