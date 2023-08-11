import GenrePanel from 'components/TvShows/GenrePanel/GenrePanel';
import Trending from 'components/TvShows/Trending/Trending';
import TopRated from 'components/TvShows/TopRated/TopRated';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import { useState } from 'react';
import SearchTvShow from 'components/SearchTvShow/SearchTvShow';

function TvShows() {
  const [searchingQuery, setSearchingQuery] = useState(false);
  return (
    <>
      <GenrePanel />
      <SectionTemplate>
        <SearchTvShow onSubmit={e => setSearchingQuery(e)} />
        {!searchingQuery ? (
          <>
            {' '}
            <TopRated />
            <Trending />
          </>
        ) : null}
      </SectionTemplate>
    </>
  );
}
export default TvShows;
