import GenrePanel from 'components/Movies/GenrePanel/GenrePanel';
import Trending from 'components/Movies/Trending/Trending';
import TopRated from 'components/Movies/TopRated/TopRated';
import Popular from 'components/Movies/Popular/Popular';
import NowPlaying from 'components/Movies/NowPlaying/NowPlaying';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { useState } from 'react';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';

function Movies() {
  const [searchingQuery, setSearchingQuery] = useState(false);
  return (
    <>
      <GenrePanel />
      <SectionTemplate>
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
      </SectionTemplate>
    </>
  );
}
export default Movies;
