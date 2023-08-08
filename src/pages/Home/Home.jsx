import Upcoming from 'components/Home/Upcoming/Upcoming';
import Trending from 'components/Home/Trending/Trending';
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
