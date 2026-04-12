import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/content';
import IskandarLogo from './IskandarLogo';
import './Footer.css';

export default function Footer() {
  const { footer, nav } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <IskandarLogo size={32} className="footer__logo-icon" />
              <span className="footer__logo-text">ISKANDAR</span>
            </div>
            <p className="footer__desc">
              Simplificando la integración de sistemas ERP a través de una arquitectura 
              robusta, moderna y de código abierto.
            </p>
            <div className="footer__socials">
              <a href={nav.github} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer__nav">
            <h4 className="footer__title">Proyecto</h4>
            <ul className="footer__list">
              {nav.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer__link">{link.name}</a>
                </li>
              ))}
              <li><a href={nav.github} target="_blank" rel="noopener noreferrer" className="footer__link">Repositorio</a></li>
            </ul>
          </div>

          <div className="footer__nav">
            <h4 className="footer__title">Autor</h4>
            <ul className="footer__list">
              <li>
                <a href="https://portafoliodca.netlify.app/" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--external">
                  DCA Portfolio <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="mailto:contato@dca-analytics.com" className="footer__link footer__link--external">
                  Contacto <Mail size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            &copy; {year} Iskandar Project. Creado por DCA Analytics.
          </div>
          <div className="footer__legal">
            Open Source bajo {footer.license}.
          </div>
        </div>
      </div>
    </footer>
  );
}
