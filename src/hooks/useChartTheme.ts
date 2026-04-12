import { useTheme } from '../context/ThemeContext';

export function useChartTheme() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return {
    isDark,
    tooltip: {
      backgroundColor: isDark ? '#111119' : '#ffffff',
      borderColor: isDark ? '#1e1e30' : '#e0e4e8',
      textStyle: {
        color: isDark ? '#e8e8ed' : '#1a1a2e',
        fontFamily: 'Inter',
      },
    },
    axisLine: {
      lineStyle: { color: isDark ? '#1e1e30' : '#e0e4e8' },
    },
    axisLabel: {
      color: isDark ? '#a1a1b5' : '#4a4a5e',
      fontFamily: 'Inter',
    },
    axisLabelMuted: {
      color: isDark ? '#5c5c72' : '#8888a0',
      fontFamily: 'Inter',
    },
    splitLine: {
      lineStyle: {
        color: isDark ? '#1e1e30' : '#e8ecf0',
        type: 'dashed' as const,
      },
    },
    treeLabel: {
      color: isDark ? '#e8e8ed' : '#1a1a2e',
      backgroundColor: isDark ? '#1a1a28' : '#f8faff',
      borderColor: isDark ? '#2e2e48' : '#c0d0ef',
    },
    treeLabelLeaf: {
      color: isDark ? '#a1a1b5' : '#475569',
      backgroundColor: isDark ? '#111119' : '#ffffff',
      borderColor: isDark ? '#1e1e30' : '#e0e8f5',
    },
    treeLineColor: isDark ? '#1e1e30' : '#cbd5e1',
    seriesPrimary: isDark ? '#007AFF' : '#007AFF',
    seriesPrimaryLight: isDark ? '#3b82f6' : '#3b82f6',
    seriesPrimaryDim: isDark ? '#1d4ed8' : '#1d4ed8',
    seriesGlow: isDark ? 'rgba(0, 122, 255, 0.3)' : 'rgba(0, 122, 255, 0.25)',
    seriesGlowFill: isDark
      ? [
          { offset: 0, color: 'rgba(0, 122, 255, 0.3)' },
          { offset: 1, color: 'rgba(0, 122, 255, 0.05)' },
        ]
      : [
          { offset: 0, color: 'rgba(0, 122, 255, 0.2)' },
          { offset: 1, color: 'rgba(0, 122, 255, 0.02)' },
        ],

    gaugeTrack: isDark ? '#1e1e30' : '#e0e8f0',
    radarSplitLine: isDark ? '#1e1e30' : '#e0e4e8',
    radarAxisLine: isDark ? '#1e1e30' : '#d0d8e0',
    detailColor: isDark ? '#e8e8ed' : '#1a1a2e',
    titleColor: isDark ? '#5c5c72' : '#6a6a80',
  };
}
