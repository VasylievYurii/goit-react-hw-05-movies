import Upcoming from './Upcoming/Upcoming';
import Trending from './Trending/Trending';
import { Section, Container } from './Home.styled';

function Home() {
  return (
    <>
      <Upcoming />
      <Section>
        <Container>
          {' '}
          <Trending />
        </Container>
      </Section>
    </>
  );
}
export default Home;
