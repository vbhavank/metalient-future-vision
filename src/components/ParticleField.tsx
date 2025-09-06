import { useEffect, useRef } from 'react';

export const ParticleField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (8 + Math.random() * 4) + 's';
      container.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 12000);
    };

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      setTimeout(createParticle, i * 100);
    }

    // Continuously create new particles
    const interval = setInterval(createParticle, 200);

    return () => {
      clearInterval(interval);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="particles" />;
};