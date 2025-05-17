import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter />
      </a>
    </div>
    <p>Endereço: Rua das Delícias, 123 - Joinville, SC</p>
    <p>&copy; 2025 Mamamia Massas - Todos os direitos reservados.</p>
  </footer>
);

export default Footer;