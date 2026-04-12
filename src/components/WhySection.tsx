import { AlertTriangle, Heart } from 'lucide-react';
import { siteContent } from '../data/content';
import { useInView } from '../hooks/useInView';
import './WhySection.css';

export default function WhySection() {
  const { why } = siteContent;
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section id="why" className="section why" ref={ref}>
      <div className="container container--narrow">
        <div className={`fade-in ${isInView ? 'visible' : ''}`}>
          <span className="section-label">{why.label}</span>
        </div>
        <h2 className={`section-title fade-in ${isInView ? 'visible' : ''} stagger-1`}>
          {why.title}
        </h2>

        <div className="why__content">
          <div className={`why__icon-block fade-in ${isInView ? 'visible' : ''} stagger-2`}>
            <div className="why__icon-wrapper">
              <AlertTriangle size={28} />
            </div>
          </div>

          <div className="why__text">
            {why.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`why__paragraph fade-in ${isInView ? 'visible' : ''} stagger-${i + 2}`}
              >
                {p}
              </p>
            ))}
          </div>

          <div className={`why__closing fade-in ${isInView ? 'visible' : ''} stagger-6`}>
            <Heart size={16} className="why__closing-icon" />
            <span>Fuego que alguien encendió y nos pasó sin pedirnos nada.</span>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="why__divider" />
    </section>
  );
}
