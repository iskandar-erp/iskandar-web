import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { siteContent } from '../data/content';
import './Hero.css';

export default function Hero() {
  const { hero } = siteContent;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <div className={`hero__badge ${mounted ? 'hero__badge--visible' : ''}`}>
          <span className="hero__badge-dot" />
          <span>v0.1.0-alpha — En desarrollo activo</span>
        </div>

        <h1 className={`hero__title ${mounted ? 'hero__title--visible' : ''}`}>
          {hero.title}
        </h1>

        <p className={`hero__tagline ${mounted ? 'hero__tagline--visible' : ''}`}>
          {hero.tagline}
        </p>

        <p className={`hero__subtitle ${mounted ? 'hero__subtitle--visible' : ''}`}>
          {hero.description}
        </p>

        <div className={`hero__actions ${mounted ? 'hero__actions--visible' : ''}`}>
          <a
            href={siteContent.nav.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta hero__cta--primary"
            id="hero-cta-github"
          >
            {hero.ctaPrimary}
            <ArrowRight size={18} />
          </a>
          <a href="#what" className="hero__cta hero__cta--secondary" id="hero-cta-docs">
            {hero.ctaSecondary}
          </a>
        </div>

        {/* Code preview */}
        <div className={`hero__code-preview ${mounted ? 'hero__code-preview--visible' : ''}`}>
          <div className="hero__code-header">
            <div className="hero__code-dots">
              <span /><span /><span />
            </div>
            <span className="hero__code-filename">main.rs</span>
          </div>
          <pre className="hero__code-body">
            <code>
              <span className="code-kw">use</span> <span className="code-mod">iskandar</span>::<span className="code-cls">ERPClient</span>;{'\n'}
              {'\n'}
              <span className="code-kw">let</span> <span className="code-var">erp</span> <span className="code-op">=</span> <span className="code-cls">ERPClient</span>::<span className="code-fn">new</span>(<span className="code-str">"microsip"</span>, <span className="code-op">&amp;</span><span className="code-var">config</span>)<span className="code-op">?</span>;{'\n'}
              <span className="code-kw">let</span> <span className="code-var">factura</span> <span className="code-op">=</span> <span className="code-var">erp</span>.<span className="code-fn">facturas</span>()<span className="code-op">?</span>.<span className="code-fn">crear</span>(<span className="code-var">nueva_factura</span>)<span className="code-op">?</span>;
            </code>
          </pre>
        </div>
      </div>

      <a href="#why" className="hero__scroll" aria-label="Scroll down">
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
