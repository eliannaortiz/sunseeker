import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, firstContentfulPaint: entry.startTime } : null);
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => prev ? { ...prev, largestContentfulPaint: entry.startTime } : null);
        }
        
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          setMetrics(prev => prev ? { 
            ...prev, 
            cumulativeLayoutShift: prev.cumulativeLayoutShift + entry.value 
          } : null);
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });

    // Get load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics({
        loadTime,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0
      });
    });

    return () => observer.disconnect();
  }, []);

  if (process.env.NODE_ENV !== 'development' || !metrics) return null;

  const getScoreColor = (metric: string, value: number) => {
    switch (metric) {
      case 'fcp':
        return value < 1800 ? 'text-green-600' : value < 3000 ? 'text-yellow-600' : 'text-red-600';
      case 'lcp':
        return value < 2500 ? 'text-green-600' : value < 4000 ? 'text-yellow-600' : 'text-red-600';
      case 'cls':
        return value < 0.1 ? 'text-green-600' : value < 0.25 ? 'text-yellow-600' : 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 no-print">
      {!showMetrics ? (
        <button
          onClick={() => setShowMetrics(true)}
          className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          title="Show performance metrics"
        >
          <Activity size={16} />
        </button>
      ) : (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-xl max-w-xs">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold">Performance</h4>
            <button
              onClick={() => setShowMetrics(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span className="font-mono">{Math.round(metrics.loadTime)}ms</span>
            </div>
            
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={`font-mono ${getScoreColor('fcp', metrics.firstContentfulPaint)}`}>
                {Math.round(metrics.firstContentfulPaint)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={`font-mono ${getScoreColor('lcp', metrics.largestContentfulPaint)}`}>
                {Math.round(metrics.largestContentfulPaint)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={`font-mono ${getScoreColor('cls', metrics.cumulativeLayoutShift)}`}>
                {metrics.cumulativeLayoutShift.toFixed(3)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;