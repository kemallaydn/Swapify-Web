import { motion } from 'framer-motion';
import './Hero.css'; // Stil dosyası ekleyebilirsin.

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Swapify'e Hoş Geldiniz
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.5 }}
      >
        Takasın geleceği burada.
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        className="download-button"
      >
        Uygulamayı İndir
      </motion.button>
    </div>
  );
};

export default Hero;
