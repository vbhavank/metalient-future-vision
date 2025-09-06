import { useEffect, useRef } from 'react';

export const ManufacturingEffects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create welding sparks
    const createSpark = () => {
      const spark = document.createElement('div');
      spark.className = 'spark-particle';
      spark.style.left = Math.random() * 100 + '%';
      spark.style.animationDelay = Math.random() * 2 + 's';
      spark.style.animationDuration = (2 + Math.random() * 2) + 's';
      container.appendChild(spark);

      setTimeout(() => {
        if (spark.parentNode) {
          spark.parentNode.removeChild(spark);
        }
      }, 5000);
    };

    // Create welding glow effects
    const createWeldingGlow = () => {
      const glow = document.createElement('div');
      glow.className = 'welding-glow';
      glow.style.left = Math.random() * 90 + '%';
      glow.style.top = Math.random() * 90 + '%';
      glow.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(glow);

      setTimeout(() => {
        if (glow.parentNode) {
          glow.parentNode.removeChild(glow);
        }
      }, 8000);
    };

    // Create initial effects
    for (let i = 0; i < 15; i++) {
      setTimeout(createSpark, i * 200);
    }

    for (let i = 0; i < 3; i++) {
      setTimeout(createWeldingGlow, i * 1000);
    }

    // Continuously create new effects
    const sparkInterval = setInterval(createSpark, 300);
    const glowInterval = setInterval(createWeldingGlow, 2000);

    return () => {
      clearInterval(sparkInterval);
      clearInterval(glowInterval);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="particles" />;
};

export const CNCIndicator = ({ className }: { className?: string }) => {
  return (
    <div className={`cnc-indicator ${className || ''}`}>
      <div className="flex items-center gap-2 text-sm text-primary">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono">CNC ACTIVE</span>
      </div>
    </div>
  );
};

export const PrecisionGrid = ({ className }: { className?: string }) => {
  return (
    <div className={`precision-grid ${className || ''} absolute inset-0 opacity-20`} />
  );
};

export const MetalSpinIndicator = ({ className }: { className?: string }) => {
  return (
    <div className={`metal-spin ${className || ''} relative`}>
      <div className="w-12 h-12 border-2 border-primary rounded-full" />
    </div>
  );
};