import { Container } from '../../../styles/common/Container.styled';
import { SectionTitle } from "../../../styles/common/SectionTitle.styled";
import { TeamSection, TeamContent, TeamSubtitle, TeamText, TeamList, TeamItem, TeamPhoto, TeamName, TeamWrapper, TeamLayout } from './Team.styled';
import { Socials } from '../../../components/Socials';

const team = [
  {
    id: 1,
    name: 'John Doe',
    position: 'President',
    links: { facebook: '', twitter: '', youtube: '', linkedin: '' }
  },
  {
    id: 2,
    name: 'Jane Doe',
    position: 'Vice President',
    links: { facebook: '', twitter: '', youtube: '', linkedin: '' }
  },
  {
    id: 3,
    name: 'Steve Smith',
    position: 'Marketing Head',
    links: { facebook: '', twitter: '', youtube: '', linkedin: '' }
  },
];

export const Team = () => {
  return (
    <TeamSection>
      <Container>
        <TeamContent>
          <TeamSubtitle>Who we are</TeamSubtitle>
          <SectionTitle maxWidth="auto">Our Professional Team</SectionTitle>
          <TeamText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</TeamText>
          <TeamList>
            {team.map(({ id, name, position, links }) => {
              return <TeamItem key={id}>
                <TeamWrapper>
                  <picture>
                    <source srcSet={`${require(`../../../images/team/person${id}.webp`)} 1x, ${require(`../../../images/team/person${id}@2x.webp`)} 2x,`}
                      type="image/webp" />
                    <TeamPhoto src={require(`../../../images/team/person${id}.jpg`)} alt={name}
                      srcSet={`${require(`../../../images/team/person${id}@2x.jpg`)} 2x`} loading="lazy" />
                  </picture>
                  <TeamLayout><Socials facebook={links.facebook} twitter={links.twitter} youtube={links.youtube} linkedin={links.linkedin} /></TeamLayout>
                </TeamWrapper>
                <TeamName>{name}</TeamName>
                <p>{position}</p>
              </TeamItem>
            })}
          </TeamList>
        </TeamContent>
      </Container>
    </TeamSection>
  );
};