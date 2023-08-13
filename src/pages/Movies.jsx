import GenrePanel from 'components/Movies/GenrePanel/GenrePanel';
import Trending from 'components/Movies/Trending/Trending';
import TopRated from 'components/Movies/TopRated/TopRated';
import Popular from 'components/Movies/Popular/Popular';
import NowPlaying from 'components/Movies/NowPlaying/NowPlaying';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import { useState } from 'react';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import { motion } from 'framer-motion';

function Movies() {
  const [searchingQuery, setSearchingQuery] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GenrePanel />
      <SectionTemplate>
        <SearchMovie onSubmit={e => setSearchingQuery(e)} />
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
    </motion.div>
  );
}
export default Movies;
