import { GitPullRequest, Mail, ExternalLink, MapPin, Scale, Heart } from 'lucide-react';
import { siteContent } from '../data/content';
import IskandarLogo from './IskandarLogo';
import './Footer.css';

export default function Footer() {
  const { footer, nav } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <IskandarLogo size={32} className="footer__logo-icon" />
              <span className="footer__logo-text">ISKANDAR</span>
            </div>
            <p className="footer__description">{footer.description}</p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Proyecto</h4>
            {nav.links.map((link) => (
              <a key={link.name} href={link.href} className="footer__link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Recursos</h4>
            <a
              href={nav.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <GitPullRequest size={14} /> Repositorio
            </a>
            <a href="#contribute" className="footer__link">
              <Heart size={14} /> Contribuir
            </a>
            <a
              href="https://www.gnu.org/licenses/agpl-3.0.html"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <Scale size={14} /> Licencia {footer.license}
            </a>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Autor</h4>
            <a
              href="https://portafoliodca.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <ExternalLink size={14} /> DCA Portfolio
            </a>
            <a href="mailto:Albertolauren@hotmail.com" className="footer__link">
              <Mail size={14} /> Albertolauren@hotmail.com
            </a>
            <a href="mailto:malbert.quintana@gmail.com" className="footer__link">
              <Mail size={14} /> malbert.quintana@gmail.com
            </a>
            <span className="footer__meta-item">
              <MapPin size={14} /> {footer.location}
            </span>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <div className="footer__built-by">
            Construido por{' '}
            <a
              href="https://portafoliodca.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__built-link"
            >
              {footer.builtBy}
            </a>
          </div>
          <div className="footer__copyright">
            &copy; {year} Iskandar — Open Source bajo {footer.license}
          </div>
        </div>
      </div>
    </footer>
  );
}
