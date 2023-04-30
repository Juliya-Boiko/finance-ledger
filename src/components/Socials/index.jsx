import { SocialsList, SocialItem } from "./Socials.styled";
import { ReactComponent as Twitter } from '../../images/icons/twitter.svg';
import { ReactComponent as Facebook } from '../../images/icons/facebook.svg';
import { ReactComponent as LinkedIn } from '../../images/icons/linkedin.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';

export const Socials = ({ facebook, twitter, youtube, linkedin, colored }) => {
  return (
    <SocialsList>
      <SocialItem colored={colored}>
        <a href={facebook}>
          <Facebook />
        </a>
      </SocialItem>
      <SocialItem colored={colored}>
      <a href={twitter}>
        <Twitter />
      </a>
      </SocialItem>
      <SocialItem colored={colored}>
        <a href={youtube}>
          <Youtube />
        </a>
      </SocialItem>
      <SocialItem colored={colored}>
        <a href={linkedin}>
          <LinkedIn />
        </a>
      </SocialItem>
    </SocialsList>
  );
};