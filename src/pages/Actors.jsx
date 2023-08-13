import Trending from 'components/Actors/Trending/Trending';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import { motion } from 'framer-motion';

function Actors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SectionTemplate>
        <Trending />
      </SectionTemplate>
    </motion.div>
  );
}

export default Actors;
