import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { siteContent } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import DcaLogo from './DcaLogo';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme, isFirstVisit, dismissFirstVisit } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a 
          href="https://portafoliodca.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="navbar__logo" 
          aria-label="DCA Portfolio"
        >
          <DcaLogo size={32} className="navbar__logo-icon" />
          <span className="navbar__logo-text">DCA</span>
        </a>

        <div className="navbar__links">
          {siteContent.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <div className="navbar__theme-wrapper">
            <button
              className={`navbar__theme-toggle ${isFirstVisit ? 'navbar__theme-toggle--glow' : ''}`}
              onClick={toggleTheme}
              onMouseEnter={() => isFirstVisit && dismissFirstVisit()}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {isFirstVisit && (
              <div className="navbar__theme-tooltip">
                <span>Cambia entre modo claro y oscuro</span>
                <button onClick={dismissFirstVisit} className="navbar__tooltip-close">
                  <X size={14} />
                </button>
              </div>
            )}
          </div>

          <a
            href="https://github.com/iskandar-erp"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            GitHub
          </a>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-links">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-link navbar__mobile-link--cta"
          >
            Ver en GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
