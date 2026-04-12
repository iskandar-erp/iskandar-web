import ReactECharts from 'echarts-for-react';
import { siteContent } from '../data/content';
import { useInView } from '../hooks/useInView';
import { useChartTheme } from '../hooks/useChartTheme';
import './StatsSection.css';

export default function StatsSection() {
  const { stats } = siteContent;
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const theme = useChartTheme();

  const gaugeOption = {
    backgroundColor: 'transparent',
    series: [
      {
        type: 'gauge',
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        splitNumber: 10,
        itemStyle: {
          color: {
            type: 'linear' as const,
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              { offset: 0, color: theme.seriesPrimaryDim },
              { offset: 0.5, color: theme.seriesPrimary },
              { offset: 1, color: theme.seriesPrimaryLight },
            ],
          },
        },
        progress: {
          show: true,
          width: 14,
          roundCap: true,
        },
        pointer: { show: false },
        axisLine: {
          lineStyle: {
            width: 14,
            color: [[1, theme.gaugeTrack]],
          },
          roundCap: true,
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: {
          fontSize: 13,
          fontFamily: 'Inter',
          color: theme.titleColor,
          offsetCenter: [0, '60%'],
        },
        detail: {
          fontSize: 32,
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          color: theme.detailColor,
          offsetCenter: [0, '15%'],
          formatter: '{value}%',
          valueAnimation: true,
        },
        data: [{ value: 15, name: 'Progreso General' }],
      },
    ],
  };

  const radarOption = {
    backgroundColor: 'transparent',
    tooltip: theme.tooltip,
    radar: {
      indicator: [
        { name: 'Extensibilidad', max: 10 },
        { name: 'Type Safety', max: 10 },
        { name: 'API Design', max: 10 },
        { name: 'Documentación', max: 10 },
        { name: 'Cobertura', max: 10 },
        { name: 'Performance', max: 10 },
      ],
      shape: 'polygon' as const,
      axisName: {
        color: theme.axisLabel.color,
        fontFamily: 'Inter',
        fontSize: 11,
      },
      splitArea: {
        areaStyle: { color: ['transparent'] },
      },
      splitLine: {
        lineStyle: { color: theme.radarSplitLine },
      },
      axisLine: {
        lineStyle: { color: theme.radarAxisLine },
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [9, 8, 9, 5, 3, 7],
            name: 'Iskandar v0.1.0',
            areaStyle: {
              color: {
                type: 'radial' as const,
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: theme.seriesGlowFill,
              },
            },
            lineStyle: { color: theme.seriesPrimary, width: 2 },
            itemStyle: { color: theme.seriesPrimary },
            symbol: 'circle',
            symbolSize: 6,
          },
        ],
        animationDuration: 1200,
      },
    ],
  };

  return (
    <section id="stats" className="section stats" ref={ref}>
      <div className="container">
        <div className={`fade-in ${isInView ? 'visible' : ''}`}>
          <span className="section-label">{stats.label}</span>
        </div>
        <h2 className={`section-title fade-in ${isInView ? 'visible' : ''} stagger-1`}>
          {stats.title}
        </h2>
        <p className={`section-subtitle fade-in ${isInView ? 'visible' : ''} stagger-2`}>
          {stats.subtitle}
        </p>

        {/* Stats cards */}
        <div className="stats__cards">
          {stats.items.map((item, i) => (
            <div
              key={item.label}
              className={`stats__card fade-in ${isInView ? 'visible' : ''} stagger-${i + 2}`}
            >
              <span className="stats__card-value">
                {item.value}
                <span className="stats__card-suffix">{item.suffix}</span>
              </span>
              <span className="stats__card-label">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="stats__charts">
          <div className={`stats__chart-card fade-in-left ${isInView ? 'visible' : ''} stagger-4`}>
            <div className="stats__chart-title">Progreso del Proyecto</div>
            <ReactECharts
              option={gaugeOption}
              style={{ height: '280px', width: '100%' }}
              opts={{ renderer: 'canvas' }}
            />
          </div>
          <div className={`stats__chart-card fade-in-right ${isInView ? 'visible' : ''} stagger-5`}>
            <div className="stats__chart-title">Capacidades del Framework</div>
            <ReactECharts
              option={radarOption}
              style={{ height: '280px', width: '100%' }}
              opts={{ renderer: 'canvas' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
