import { useEffect, useState } from 'react';

export const CursorEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setCursorTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 positions
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-full h-full border-2 border-primary rounded-full animate-pulse" />
      </div>

      {/* Cursor Trail */}
      {cursorTrail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: (index + 1) / cursorTrail.length * 0.5,
            transform: `scale(${(index + 1) / cursorTrail.length})`,
          }}
        >
          <div className="w-1 h-1 bg-primary rounded-full" />
        </div>
      ))}

      {/* Floating Particles following cursor */}
      <div 
        className="fixed pointer-events-none z-30"
        style={{
          transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="relative w-24 h-24">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-float opacity-30"
              style={{
                left: `${Math.cos(i * 60 * Math.PI / 180) * 20 + 50}%`,
                top: `${Math.sin(i * 60 * Math.PI / 180) * 20 + 50}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const MouseParallax = ({ children, intensity = 1 }: { children: React.ReactNode; intensity?: number }) => {
  return (
    <div 
      className="cursor-parallax"
      style={{
        transform: `translate(calc(var(--mouse-x, 0px) * ${intensity * 0.1}), calc(var(--mouse-y, 0px) * ${intensity * 0.1}))`
      }}
    >
      {children}
    </div>
  );
};