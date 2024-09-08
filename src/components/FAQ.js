import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Sıkça Sorulan Sorular</h2>
      <div className="faq-item">
        <h3>Swapify nasıl çalışır?</h3>
        <p>Swapify, başkalarıyla mal ve hizmet takası yapmanızı sağlar.</p>
      </div>
      <div className="faq-item">
        <h3>Kullanmak ücretsiz mi?</h3>
        <p>Evet, Swapify tamamen ücretsizdir.</p>
      </div>
      <div className="faq-item">
        <h3>Nasıl başlayabilirim?</h3>
        <p>Uygulamayı indirip bir hesap oluşturarak takasa başlayabilirsiniz.</p>
      </div>
    </div>
  );
};

export default FAQ;
