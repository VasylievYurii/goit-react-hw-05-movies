import { Section, Container } from './Actors.styled';
import Trending from 'components/Actors/Trending/Trending';

function Actors() {
  return (
    <>
      <Section>
        <Container>
          <Trending />
        </Container>
      </Section>
    </>
  );
}

export default Actors;
