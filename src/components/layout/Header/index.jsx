import { Container } from "../../../styles/common/Container.styled";
import { Logo } from "../../Logo";
import { Navigation } from "../../Navigation";
import { HeaderSection, HeaderContent } from "./Header.styled";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  const anchorHandler = (e) => {
    e.preventDefault();
    const anchorName = e.target.href.toString().split('#')[1];
    const anchorTarget = document.getElementById(anchorName);
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <Logo />
          <Navigation onClick={anchorHandler} />
        </HeaderContent>  
      </Container>
    </HeaderSection>
  );
}