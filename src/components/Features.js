import { Parallax } from 'react-scroll-parallax';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <Parallax speed={-10}>
        <h2>Kesintisiz Takas</h2>
      </Parallax>
      <div className="feature-cards">
        <FeatureCard title="Kullanım Kolaylığı" description="Kolayca takas yapın." />
        <FeatureCard title="Geniş Kapsam" description="Dünya çapında takasçılarla bağlanın." />
        <FeatureCard title="Güvenli" description="Güvenli ve güvenilir işlemler." />
      </div>
    </div>
  );
};

export default Features;
