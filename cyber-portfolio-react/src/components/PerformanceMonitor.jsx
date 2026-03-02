import React, { useState, useEffect } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    fps: 60,
    memory: 0,
    isVisible: false
  });

  useEffect(() => {
    // Calculate page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime / 1000 * 100) / 100 }));

    // Monitor FPS
    let fps = 60;
    let lastTime = performance.now();
    let frames = 0;
    
    const calculateFPS = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frames * 1000) / (currentTime - lastTime));
        frames = 0;
        lastTime = currentTime;
        setMetrics(prev => ({ ...prev, fps }));
      }
      
      if (metrics.isVisible) {
        requestAnimationFrame(calculateFPS);
      }
    };

    // Monitor memory usage
    const updateMemory = () => {
      if (performance.memory) {
        const used = Math.round(performance.memory.usedJSHeapSize / 1048576);
        setMetrics(prev => ({ ...prev, memory: used }));
      }
    };

    const memoryInterval = setInterval(updateMemory, 2000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, [metrics.isVisible]);

  const toggleVisibility = () => {
    setMetrics(prev => ({ ...prev, isVisible: !prev.isVisible }));
  };

  const getPerformanceScore = () => {
    const score = Math.round((100 - metrics.loadTime) * 0.6 + (metrics.fps / 60) * 100 * 0.4);
    return Math.min(100, Math.max(0, score));
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-cyber-success';
    if (score >= 60) return 'text-cyber-accent';
    if (score >= 40) return 'text-cyber-secondary';
    return 'text-cyber-primary';
  };

  const score = getPerformanceScore();

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 z-40 w-10 h-10 bg-cyber-dark/80 border border-cyber-primary/30 rounded-none flex items-center justify-center text-cyber-primary hover:bg-cyber-primary hover:text-black transition-all font-mono text-xs backdrop-blur-sm"
        style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
        title="Toggle Performance Monitor"
      >
        <i className="fas fa-tachometer-alt"></i>
      </button>

      {/* Performance Monitor Panel */}
      {metrics.isVisible && (
        <div className="fixed bottom-16 right-4 z-40 bg-cyber-dark/90 border border-cyber-primary/30 p-4 backdrop-blur-md font-mono text-xs"
             style={{ 
               clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
               minWidth: '200px'
             }}>
          <div className="text-cyber-primary font-bold mb-3 text-sm">SYSTEM PERFORMANCE</div>
          
          <div className="space-y-2">
            {/* Performance Score */}
            <div className="flex justify-between items-center">
              <span className="text-gray-400">SCORE:</span>
              <span className={`font-bold ${getScoreColor(score)}`}>{score}%</span>
            </div>
            
            {/* Load Time */}
            <div className="flex justify-between items-center">
              <span className="text-gray-400">LOAD:</span>
              <span className="text-cyber-accent">{metrics.loadTime}s</span>
            </div>
            
            {/* FPS */}
            <div className="flex justify-between items-center">
              <span className="text-gray-400">FPS:</span>
              <span className={`${metrics.fps >= 50 ? 'text-cyber-success' : 'text-cyber-secondary'}`}>
                {metrics.fps}
              </span>
            </div>
            
            {/* Memory */}
            <div className="flex justify-between items-center">
              <span className="text-gray-400">MEM:</span>
              <span className="text-cyber-primary">{metrics.memory}MB</span>
            </div>
          </div>

          {/* Performance Bar */}
          <div className="mt-3 h-1 bg-gray-800 rounded-none overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${getScoreColor(score).replace('text-', 'bg-')}`}
              style={{ width: `${score}%` }}
            ></div>
          </div>

          {/* Status Indicator */}
          <div className="mt-2 text-center">
            <span className={`text-xs ${score >= 80 ? 'text-cyber-success' : score >= 60 ? 'text-cyber-accent' : 'text-cyber-secondary'}`}>
              {score >= 80 ? 'OPTIMAL' : score >= 60 ? 'GOOD' : 'NEEDS OPTIMIZATION'}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceMonitor;
