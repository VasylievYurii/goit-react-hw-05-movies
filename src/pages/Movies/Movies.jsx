import GenrePanel from 'components/Movies/GenrePanel/GenrePanel';
import Trending from 'components/Movies/Trending/Trending';
import TopRated from 'components/Movies/TopRated/TopRated';
import Popular from 'components/Movies/Popular/Popular';
import NowPlaying from 'components/Movies/NowPlaying/NowPlaying';
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
