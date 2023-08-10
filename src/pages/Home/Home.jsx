import Upcoming from 'components/Home/Upcoming/Upcoming';
import Trending from 'components/Home/Trending/Trending';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';

function Home() {
  return (
    <>
      <Upcoming />
      <SectionTemplate>
        <Trending />
      </SectionTemplate>
    </>
  );
}
export default Home;
