import ReactECharts from 'echarts-for-react';
import { MapPin } from 'lucide-react';
import { siteContent } from '../data/content';
import { useInView } from '../hooks/useInView';
import { useChartTheme } from '../hooks/useChartTheme';
import './EcosystemSection.css';

export default function EcosystemSection() {
  const { ecosystem } = siteContent;
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const theme = useChartTheme();

  const chartOption = {
    backgroundColor: 'transparent',
    tooltip: {
      ...theme.tooltip,
      trigger: 'axis' as const,
      formatter: (params: Array<{ name: string; value: number }>) => {
        const item = params[0];
        const country = ecosystem.countries.find((c) => c.name === item.name);
        if (!country) return '';
        return `<strong>${country.name}</strong><br/>ERPs: ${country.erps.join(', ')}`;
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '12%',
      containLabel: true,
    },
    xAxis: {
      type: 'category' as const,
      data: ecosystem.countries.map((c) => c.name),
      axisLine: theme.axisLine,
      axisLabel: theme.axisLabel,
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value' as const,
      axisLine: { show: false },
      splitLine: { 
        show: theme.isDark, // Ocultar líneas en modo claro como se solicitó
        lineStyle: { color: theme.isDark ? '#1e1e30' : 'transparent', type: 'dashed' as const } 
      },
      axisLabel: theme.axisLabelMuted,
    },
    series: [
      {
        name: 'ERPs Soportados',
        type: 'bar',
        barWidth: '50%',
        data: ecosystem.countries.map((c) => ({
          value: c.value,
          itemStyle: {
            borderRadius: [6, 6, 0, 0],
            color: {
              type: 'linear' as const,
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: theme.seriesPrimary },
                { offset: 1, color: theme.seriesPrimaryDim },
              ],
            },
          },
        })),
        emphasis: {
          itemStyle: {
            color: {
              type: 'linear' as const,
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: theme.seriesPrimaryLight },
                { offset: 1, color: theme.seriesPrimary },
              ],
            },
            shadowBlur: 20,
            shadowColor: theme.seriesGlow,
          },
        },
      },
    ],
    animationDuration: 1200,
    animationEasing: 'cubicOut' as const,
  };

  return (
    <section id="ecosystem" className="section ecosystem" ref={ref}>
      <div className="container">
        <div className={`fade-in ${isInView ? 'visible' : ''}`}>
          <span className="section-label">{ecosystem.label}</span>
        </div>
        <h2 className={`section-title fade-in ${isInView ? 'visible' : ''} stagger-1`}>
          {ecosystem.title}
        </h2>
        <p className={`section-subtitle fade-in ${isInView ? 'visible' : ''} stagger-2`}>
          {ecosystem.subtitle}
        </p>

        <div className="ecosystem__grid">
          {/* Chart */}
          <div className={`ecosystem__chart-wrapper fade-in-left ${isInView ? 'visible' : ''} stagger-3`}>
            <div className="ecosystem__chart-card">
              <div className="ecosystem__chart-title">ERPs Soportados por Región</div>
              <ReactECharts
                option={chartOption}
                style={{ height: '320px', width: '100%' }}
                opts={{ renderer: 'canvas' }}
              />
            </div>
          </div>

          {/* Country cards */}
          <div className="ecosystem__countries">
            {ecosystem.countries.map((country, i) => (
              <div
                key={country.code}
                className={`ecosystem__country fade-in-right ${isInView ? 'visible' : ''} stagger-${i + 2}`}
              >
                <div className="ecosystem__country-header">
                  <MapPin size={16} className="ecosystem__country-pin" />
                  <span className="ecosystem__country-name">{country.name}</span>
                  <span className="ecosystem__country-count">{country.erps.length}</span>
                </div>
                <div className="ecosystem__country-erps">
                  {country.erps.map((erp) => (
                    <span key={erp} className="ecosystem__erp-tag">{erp}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
