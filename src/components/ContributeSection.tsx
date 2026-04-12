import { BookOpen, Target, Code, GitPullRequest, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';
import { useInView } from '../hooks/useInView';
import './ContributeSection.css';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  BookOpen,
  Target,
  Code,
  GitPullRequest,
};

export default function ContributeSection() {
  const { contribute } = siteContent;
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="contribute" className="section contribute" ref={ref}>
      <div className="container">
        <div className={`fade-in ${isInView ? 'visible' : ''}`}>
          <span className="section-label">{contribute.label}</span>
        </div>
        <h2 className={`section-title fade-in ${isInView ? 'visible' : ''} stagger-1`}>
          {contribute.title}
        </h2>
        <p className={`section-subtitle fade-in ${isInView ? 'visible' : ''} stagger-2`}>
          {contribute.subtitle}
        </p>

        <div className="contribute__steps">
          {contribute.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.title}
                className={`contribute__step fade-in ${isInView ? 'visible' : ''} stagger-${i + 2}`}
              >
                <div className="contribute__step-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="contribute__step-icon">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="contribute__step-title">{step.title}</h3>
                <p className="contribute__step-desc">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`contribute__cta-wrapper fade-in ${isInView ? 'visible' : ''} stagger-6`}>
          <div className="contribute__cta-card">
            <div className="contribute__cta-glow" />
            <h3 className="contribute__cta-title">
              Cada provider nuevo es una victoria para todos
            </h3>
            <p className="contribute__cta-text">
              Si tu ERP está en la lista — o no está — puedes construir un provider para él.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contribute__cta-btn"
              id="contribute-cta"
            >
              Comenzar a contribuir
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
