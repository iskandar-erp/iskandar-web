import { useState, useEffect } from 'react';
import { Menu, X, GitPullRequest, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { siteContent } from '../data/content';
import IskandarLogo from './IskandarLogo';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { nav } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <a 
          href="/" 
          className="navbar__logo"
          aria-label="Iskandar Home"
        >
          <IskandarLogo size={32} className="navbar__logo-icon" />
          <span className="navbar__logo-text">ISKANDAR</span>
        </a>

        {/* Desktop Nav */}
        <div className="navbar__desktop">
          <div className="navbar__links">
            {nav.links.map((link) => (
              <a key={link.name} href={link.href} className="navbar__link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            <button
              onClick={toggleTheme}
              className="navbar__theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={nav.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm btn--icon"
            >
              <GitPullRequest size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="navbar__mobile-actions">
          <button
            onClick={toggleTheme}
            className="navbar__theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="navbar__toggle"
            onClick={toggleMenu}
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
            className="btn btn--primary btn--full btn--icon"
            onClick={() => setIsOpen(false)}
          >
            <GitPullRequest size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
