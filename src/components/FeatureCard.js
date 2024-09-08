import { motion } from 'framer-motion';
import './FeatureCard.css';

const FeatureCard = ({ title, description }) => {
  return (
    <motion.div 
      className="feature-card"
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95, rotate: -2 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
