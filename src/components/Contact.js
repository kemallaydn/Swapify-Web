import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>İletişime Geçin</h2>
      <p>Sosyal medyada bizi takip edin veya bize bir e-posta gönderin.</p>
      <div className="social-icons">
        <a href="https://twitter.com/swapify">Twitter</a>
        <a href="https://facebook.com/swapify">Facebook</a>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Adınız" />
        <input type="email" placeholder="E-posta Adresiniz" />
        <textarea placeholder="Mesajınız"></textarea>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Contact;
