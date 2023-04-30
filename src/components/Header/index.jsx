import { Container } from "../../styles/common/Container.styled";
import { ReactComponent as LogoIcon } from '../../images/icons/logo.svg';
import { HeaderSection, HeaderContent, Logo, Navigation, NavLink } from "./Header.styled";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  const anchorHandler = (e) => {
    e.preventDefault();
    const anchorName = e.target.href.toString().split('#')[1];
    const anchorTarget = document.getElementById(anchorName);
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollHandler = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const scrollEventHandler = () => {
      scrollHandler(header.top, header.height)
    }
    window.addEventListener('scroll', scrollEventHandler);

    return () => {
      window.removeEventListener('scroll', scrollEventHandler);
    };
  }, []);

  return (
    <HeaderSection sticky={sticky.isSticky} id="sticky-header" ref={headerRef}>
      <Container>
        <HeaderContent>
          <Logo>
            <LogoIcon />
            <span>Finance</span>
            Ledger
          </Logo>
          <Navigation>
            <NavLink href="#home" onClick={anchorHandler}>Home</NavLink>
            <NavLink href="#about" onClick={anchorHandler}>About</NavLink>
            <NavLink href="#cases" onClick={anchorHandler}>Cases</NavLink>
            <NavLink href="#blog" onClick={anchorHandler}>Blog</NavLink>
            <NavLink href="#contact" onClick={anchorHandler}>Contact</NavLink>
          </Navigation>
        </HeaderContent>  
      </Container>
    </HeaderSection>
  );
}