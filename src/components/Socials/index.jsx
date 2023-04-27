import { SocialsList, SocialItem } from "./Socials.styled";
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';
import { ReactComponent as Facebook } from '../../images/icons/facebook.svg';
import { ReactComponent as LinkedIn } from '../../images/icons/linkedin.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';

export const Socials = () => {
  return (
    <SocialsList>
      <SocialItem>
        <a href="/">
          <Facebook />
        </a>
      </SocialItem>
      <SocialItem>
      <a href="/">
        <Twitter />
      </a>
      </SocialItem>
      <SocialItem>
        <a href="/">
          <Youtube />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="/">
          <LinkedIn />
        </a>
      </SocialItem>
    </SocialsList>
  );
};