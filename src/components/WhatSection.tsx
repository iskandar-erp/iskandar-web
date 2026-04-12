import { Layers, Puzzle, Globe, Shield } from 'lucide-react';
import { siteContent } from '../data/content';
import { useInView } from '../hooks/useInView';
import './WhatSection.css';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Layers,
  Puzzle,
  Globe,
  Shield,
};

export default function WhatSection() {
  const { what } = siteContent;
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { ref: ref2, isInView: isInView2 } = useInView({ threshold: 0.1 });

  return (
    <section id="what" className="section what">
      <div className="container" ref={ref}>
        <div className={`fade-in ${isInView ? 'visible' : ''}`}>
          <span className="section-label">{what.label}</span>
        </div>
        <h2 className={`section-title fade-in ${isInView ? 'visible' : ''} stagger-1`}>
          {what.title}
        </h2>
        <p className={`section-subtitle fade-in ${isInView ? 'visible' : ''} stagger-2`}>
          {what.subtitle}
        </p>

        <div className="what__grid" ref={ref2}>
          {/* Code block */}
          <div className={`what__code fade-in-left ${isInView2 ? 'visible' : ''}`}>
            <div className="what__code-header">
              <div className="what__code-dots">
                <span /><span /><span />
              </div>
              <span className="what__code-tab">main.py</span>
            </div>
            <pre className="what__code-body">
              <code>{what.codeExample}</code>
            </pre>
          </div>

          {/* Features grid */}
          <div className="what__features">
            {what.features.map((feature, i) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.title}
                  className={`what__feature fade-in-right ${isInView2 ? 'visible' : ''} stagger-${i + 1}`}
                >
                  <div className="what__feature-icon">
                    {Icon && <Icon size={20} />}
                  </div>
                  <div>
                    <h3 className="what__feature-title">{feature.title}</h3>
                    <p className="what__feature-desc">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
