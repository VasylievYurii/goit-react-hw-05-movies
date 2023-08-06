import GenrePanel from './GenrePanel/GenrePanel';
import Trending from './Trending/Trending';
import TopRated from './TopRated/TopRated';
import Popular from './Popular/Popular';
import NowPlaying from './NowPlaying/NowPlaying';
import { Section, Container } from './Movies.styled';

function Movies() {
  return (
    <>
      <GenrePanel />
      <Section>
        <Container>
          <TopRated />
          <Popular />
          <NowPlaying />
          <Trending />
        </Container>
      </Section>
    </>
  );
}
export default Movies;
