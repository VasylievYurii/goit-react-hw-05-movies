import Upcoming from 'components/Home/Upcoming/Upcoming';
import Trending from 'components/Home/Trending/Trending';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Upcoming />
      <SectionTemplate>
        <Trending />
      </SectionTemplate>
    </motion.div>
  );
}
export default Home;
