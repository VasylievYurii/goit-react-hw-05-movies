import GenrePanel from 'components/TvShows/GenrePanel/GenrePanel';
import Trending from 'components/Movies/Trending/Trending';
import TopRated from 'components/TvShows/TopRated/TopRated';
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
