import GenrePanel from 'components/TvShows/GenrePanel/GenrePanel';
import Trending from 'components/TvShows/Trending/Trending';
import TopRated from 'components/TvShows/TopRated/TopRated';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';

function TvShows() {
  return (
    <>
      <GenrePanel />
      <SectionTemplate>
        <TopRated />
        <Trending />
      </SectionTemplate>
    </>
  );
}
export default TvShows;
