import { Container } from "../../styles/common/Container.styled";
import { ReactComponent as LogoIcon } from '../../images/icons/logo.svg';
import { HeaderSection, HeaderContent, Logo, Navigation, NavLink } from "./Header.styled";



export const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderContent>
          <Logo>
            <LogoIcon />
            <span>Finance</span>
            Ledger
          </Logo>
          <Navigation>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">About</NavLink>
            <NavLink href="/">Cases</NavLink>
            <NavLink href="/">Blog</NavLink>
            <NavLink href="/">Contact</NavLink>
          </Navigation>
        </HeaderContent>  
      </Container>
    </HeaderSection>

  );
}