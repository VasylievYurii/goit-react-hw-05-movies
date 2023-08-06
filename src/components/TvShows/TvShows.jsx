import GenrePanel from './GenrePanel/GenrePanel';
import Trending from './Trending/Trending';
import TopRated from './TopRated/TopRated';
import { Section, Container } from './TvShows.styled';

function TvShows() {
  return (
    <>
      <GenrePanel />
      <Section>
        <Container>
          <TopRated />
          <Trending />
        </Container>
      </Section>
    </>
  );
}
export default TvShows;
