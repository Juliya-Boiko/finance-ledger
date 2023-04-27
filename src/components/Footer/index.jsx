import { FooterSection, FooterText } from "./Footer.styled";
import { Socials } from "../Socials";

export const Footer = () => {
  return (
    <FooterSection>
      <Socials />
      <FooterText>Copyright &#169; 2021 - FinanceLedger</FooterText>
    </FooterSection>
  );
}