import "./ Screenshots.css";
import screenshot1 from './screenshot1.png';
import screenshot2 from './screenshot2.png';
import screenshot3 from './screenshot3.png';

const Screenshots = () => {
  return (
    <div className="screenshots">
      <h2>Uygulama Ekran Görüntüleri</h2>
      <div className="screenshots-container">
        <img src={screenshot1} alt="Ekran Görüntüsü 1" />
        <img src={screenshot2} alt="Ekran Görüntüsü 2" />
        <img src={screenshot3} alt="Ekran Görüntüsü 3" />
      </div>
    </div>
  );
};

export default Screenshots;
