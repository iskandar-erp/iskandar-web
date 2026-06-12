import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { siteContent } from '../data/content';
import IskandarLogo from './IskandarLogo';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, isFirstVisit, dismissFirstVisit } = useTheme();
  const { nav } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a
          href="/"
          className="navbar__logo"
          aria-label="Iskandar Home"
        >
          <IskandarLogo size={32} className="navbar__logo-icon" />
          <span className="navbar__logo-text">ISKANDAR</span>
        </a>

        <div className="navbar__links">
          {nav.links.map((link) => (
            <a key={link.name} href={link.href} className="navbar__link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <div className="navbar__theme-wrapper">
            <button
              onClick={toggleTheme}
              className={`navbar__theme-toggle ${isFirstVisit ? 'navbar__theme-toggle--glow' : ''}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {isFirstVisit && (
              <div className="navbar__theme-tooltip">
                <span>¿Prefieres modo claro? Cámbialo aquí.</span>
                <button
                  className="navbar__tooltip-close"
                  onClick={dismissFirstVisit}
                  aria-label="Cerrar aviso"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
          <a
            href={nav.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            GitHub
          </a>
          <button
            className="navbar__mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-links">
          {nav.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={nav.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-link navbar__mobile-link--cta"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
