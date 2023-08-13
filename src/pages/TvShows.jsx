import GenrePanel from 'components/TvShows/GenrePanel/GenrePanel';
import Trending from 'components/TvShows/Trending/Trending';
import TopRated from 'components/TvShows/TopRated/TopRated';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import { useState } from 'react';
import SearchTvShow from 'components/SearchTvShow/SearchTvShow';
import { motion } from 'framer-motion';

function TvShows() {
  const [searchingQuery, setSearchingQuery] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
}
export default TvShows;
