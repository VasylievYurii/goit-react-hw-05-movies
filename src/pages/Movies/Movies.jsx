import GenrePanel from 'components/Movies/GenrePanel/GenrePanel';
import Trending from 'components/Movies/Trending/Trending';
import TopRated from 'components/Movies/TopRated/TopRated';
import Popular from 'components/Movies/Popular/Popular';
import NowPlaying from 'components/Movies/NowPlaying/NowPlaying';
import { Section, Container } from './Movies.styled';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { useState } from 'react';

function Movies() {
  const [searchingQuery, setSearchingQuery] = useState(false);
  return (
    <>
      <GenrePanel />
      <Section>
        <Container>
          <SearchMovie onSubmit={() => setSearchingQuery(true)} />
          {!searchingQuery ? (
            <>
              {' '}
              <TopRated />
              <Popular />
              <NowPlaying />
              <Trending />
            </>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
export default Movies;
