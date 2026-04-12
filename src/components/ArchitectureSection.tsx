import ReactECharts from 'echarts-for-react';
import { Cpu, Boxes, Network, Database } from 'lucide-react';
import { siteContent } from '../data/content';
import { useInView } from '../hooks/useInView';
import { useChartTheme } from '../hooks/useChartTheme';
import './ArchitectureSection.css';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Cpu,
  Boxes,
  Network,
  Database,
};

export default function ArchitectureSection() {
  const { architecture } = siteContent;
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const theme = useChartTheme();

  const treeData = {
    name: 'iskandar/',
    children: [
      {
        name: 'core/',
        children: [
          { name: 'ERPClient' },
          { name: 'Registry' },
        ],
      },
      {
        name: 'providers/',
        children: [
          { name: 'microsip/' },
          { name: '...' },
        ],
      },
      {
        name: 'api/',
        children: [
          { name: 'FastAPI' },
          { name: 'Routers' },
        ],
      },
      {
        name: 'models/',
        children: [
          { name: 'Pydantic v2' },
        ],
      },
    ],
  };

  const chartOption = {
    backgroundColor: 'transparent',
    tooltip: {
      ...theme.tooltip,
      trigger: 'item' as const,
      textStyle: { ...theme.tooltip.textStyle, fontFamily: 'JetBrains Mono', fontSize: 12 },
    },
    series: [
      {
        type: 'tree',
        data: [treeData],
        left: '10%',
        right: '10%',
        top: '15%',
        bottom: '15%',
        orient: 'TB',
        symbol: 'roundRect',
        symbolSize: [90, 32],
        edgeShape: 'polyline',
        edgeForkPosition: '63%',
        initialTreeDepth: 3,
        lineStyle: {
          width: 1.5,
          color: theme.treeLineColor,
          curveness: 0.5,
        },
        label: {
          position: 'inside',
          verticalAlign: 'middle',
          fontSize: 11,
          fontFamily: 'JetBrains Mono',
          color: theme.treeLabel.color,
          backgroundColor: theme.treeLabel.backgroundColor,
          borderColor: theme.treeLabel.borderColor,
          borderWidth: 1,
          borderRadius: 6,
          padding: [6, 12],
        },
        leaves: {
          label: {
            backgroundColor: theme.treeLabelLeaf.backgroundColor,
            borderColor: theme.treeLabelLeaf.borderColor,
          },
        },
        emphasis: {
          focus: 'descendant' as const,
          itemStyle: {
            borderColor: theme.seriesPrimary,
            shadowBlur: 15,
            shadowColor: theme.seriesGlow,
          },
        },
        expandAndCollapse: false,
        animationDuration: 800,
        animationDurationUpdate: 500,
      },
    ],
  };

  return (
    <section id="architecture" className="section architecture" ref={ref}>
      <div className="container">
        <div className={`fade-in ${isInView ? 'visible' : ''}`}>
          <span className="section-label">{architecture.label}</span>
        </div>
        <h2 className={`section-title fade-in ${isInView ? 'visible' : ''} stagger-1`}>
          {architecture.title}
        </h2>
        <p className={`section-subtitle fade-in ${isInView ? 'visible' : ''} stagger-2`}>
          {architecture.subtitle}
        </p>

        <div className="architecture__layout">
          {/* Tree chart */}
          <div className={`architecture__tree fade-in ${isInView ? 'visible' : ''} stagger-3`}>
            <div className="architecture__tree-card">
              <div className="architecture__tree-label">Estructura del Proyecto</div>
              <ReactECharts
                option={chartOption}
                style={{ height: '380px', width: '100%' }}
                opts={{ renderer: 'canvas' }}
              />
            </div>
          </div>

          {/* Module cards */}
          <div className="architecture__modules">
            {architecture.modules.map((mod, i) => {
              const Icon = iconMap[mod.icon];
              return (
                <div
                  key={mod.name}
                  className={`architecture__module fade-in-right ${isInView ? 'visible' : ''} stagger-${i + 3}`}
                >
                  <div className="architecture__module-icon">
                    {Icon && <Icon size={20} />}
                  </div>
                  <div>
                    <h3 className="architecture__module-name">{mod.name}</h3>
                    <p className="architecture__module-desc">{mod.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flow diagram */}
        <div className={`architecture__flow fade-in ${isInView ? 'visible' : ''} stagger-5`}>
          <div className="architecture__flow-step">
            <span className="architecture__flow-tag">ERP</span>
            <span className="architecture__flow-label">DLLs / APIs / DBs</span>
          </div>
          <div className="architecture__flow-arrow">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M0 6H36M36 6L30 1M36 6L30 11" stroke="var(--color-primary)" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="architecture__flow-step architecture__flow-step--highlight">
            <span className="architecture__flow-tag">Provider</span>
            <span className="architecture__flow-label">Implementa ERPProvider</span>
          </div>
          <div className="architecture__flow-arrow">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M0 6H36M36 6L30 1M36 6L30 11" stroke="var(--color-primary)" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="architecture__flow-step">
            <span className="architecture__flow-tag">Core</span>
            <span className="architecture__flow-label">ERPClient Universal</span>
          </div>
          <div className="architecture__flow-arrow">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M0 6H36M36 6L30 1M36 6L30 11" stroke="var(--color-primary)" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="architecture__flow-step">
            <span className="architecture__flow-tag">API</span>
            <span className="architecture__flow-label">REST / HTTP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
