import { SocialsList, SocialItem } from "./Socials.styled";
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';
import { ReactComponent as Facebook } from '../../images/icons/facebook.svg';
import { ReactComponent as LinkedIn } from '../../images/icons/linkedin.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';

export const Socials = ({ facebook, twitter, youtube, linkedin }) => {
  return (
    <SocialsList>
      <SocialItem>
        <a href={facebook}>
          <Facebook />
        </a>
      </SocialItem>
      <SocialItem>
      <a href={twitter}>
        <Twitter />
      </a>
      </SocialItem>
      <SocialItem>
        <a href={youtube}>
          <Youtube />
        </a>
      </SocialItem>
      <SocialItem>
        <a href={linkedin}>
          <LinkedIn />
        </a>
      </SocialItem>
    </SocialsList>
  );
};