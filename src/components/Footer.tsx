import { MapPin, Scale, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/content';
import DcaLogo from './DcaLogo';
import './Footer.css';

export default function Footer() {
  const { footer } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a 
              href="https://portafoliodca.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__logo"
            >
              <DcaLogo size={32} className="footer__logo-icon" />
              <span className="footer__logo-text">DCA</span>
            </a>
            <p className="footer__description">{footer.description}</p>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Proyecto</h4>
            <a href="#why" className="footer__link">Por qué</a>
            <a href="#what" className="footer__link">Solución</a>
            <a href="#ecosystem" className="footer__link">Ecosistema</a>
            <a href="#architecture" className="footer__link">Arquitectura</a>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Recursos</h4>
            <a href="https://github.com/iskandar-erp" target="_blank" rel="noopener noreferrer" className="footer__link">
              GitHub <ExternalLink size={12} />
            </a>
            <a href="#contribute" className="footer__link">Contribuir</a>
            <a href="#stats" className="footer__link">Estado</a>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Legal</h4>
            <div className="footer__meta-item">
              <Scale size={14} />
              <span>{footer.license}</span>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <div className="footer__built-by">
            <MapPin size={14} />
            <span>
              Desarrollado por{' '}
              <a 
                href="https://portafoliodca.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__built-link"
              >
                {footer.builtBy}
              </a>{' '}
              — {footer.location}
            </span>
          </div>
          <span className="footer__copyright">
            &copy; {year} DCA Business Intelligence. Open Source bajo {footer.license}.
          </span>
        </div>
      </div>
    </footer>
  );
}
