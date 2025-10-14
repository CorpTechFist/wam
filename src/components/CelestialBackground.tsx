import { useState, useEffect } from 'react';

export function CelestialBackground() {
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{id: number, active: boolean}>>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 4
    }));
    setStars(newStars);

    // Initialize shooting stars
    const newShootingStars = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      active: false
    }));
    setShootingStars(newShootingStars);

    // Shooting star animation timer
    const shootingInterval = setInterval(() => {
      setShootingStars(prev => 
        prev.map((star, index) => 
          Math.random() < 0.1 ? { ...star, active: true } : star
        )
      );

      setTimeout(() => {
        setShootingStars(prev => 
          prev.map(star => ({ ...star, active: false }))
        );
      }, 2000);
    }, 8000);

    return () => clearInterval(shootingInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Multi-layered celestial gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 15% 25%, rgba(30, 27, 75, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 75%, rgba(15, 15, 35, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 10%, rgba(212, 175, 55, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse at 20% 80%, rgba(74, 74, 122, 0.15) 0%, transparent 60%),
            linear-gradient(135deg, rgba(26, 26, 58, 0.95) 0%, rgba(15, 15, 35, 0.98) 30%, rgba(10, 10, 26, 0.99) 70%, rgba(0, 0, 8, 1) 100%)
          `
        }}
      />

      {/* Enhanced nebula clouds with multiple layers */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 1200px 800px at 5% 20%, rgba(212, 175, 55, 0.12) 0%, transparent 45%),
            radial-gradient(ellipse 800px 1200px at 95% 80%, rgba(74, 74, 122, 0.18) 0%, transparent 45%),
            radial-gradient(ellipse 600px 400px at 70% 30%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)
          `,
          animation: 'nebula-drift 45s ease-in-out infinite alternate'
        }}
      />

      {/* Secondary nebula layer */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            radial-gradient(ellipse 900px 600px at 80% 10%, rgba(30, 27, 75, 0.25) 0%, transparent 40%),
            radial-gradient(ellipse 700px 900px at 20% 90%, rgba(15, 15, 35, 0.3) 0%, transparent 40%)
          `,
          animation: 'nebula-drift 60s ease-in-out infinite alternate-reverse'
        }}
      />

      {/* Animated stars field */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: star.size > 1.5 
                ? 'radial-gradient(circle, #ffd700 0%, #d4af37 50%, transparent 100%)'
                : 'radial-gradient(circle, #ffffff 0%, #e8e8f5 50%, transparent 100%)',
              boxShadow: star.size > 1.5 
                ? `0 0 ${star.size * 3}px rgba(255, 215, 0, 0.4)`
                : `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3)`,
              animation: `twinkle ${3 + star.delay}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {shootingStars.map((shootingStar, index) => (
        <div
          key={shootingStar.id}
          className={`absolute w-1 h-1 rounded-full ${shootingStar.active ? 'opacity-100' : 'opacity-0'}`}
          style={{
            top: `${10 + index * 20}%`,
            left: '-5px',
            background: 'linear-gradient(90deg, transparent 0%, #ffd700 50%, transparent 100%)',
            boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)',
            animation: shootingStar.active ? 'shooting-star 2s ease-out forwards' : 'none',
            transform: 'scaleX(1)',
            transformOrigin: 'left center'
          }}
        />
      ))}

      {/* Enhanced Moon with phases and glow */}
      <div 
        className="absolute"
        style={{
          top: '12%',
          right: '8%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: `
            radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(232, 232, 245, 0.7) 20%, rgba(212, 175, 55, 0.5) 40%, rgba(74, 74, 122, 0.4) 70%, rgba(26, 26, 58, 0.6) 100%)
          `,
          boxShadow: `
            0 0 60px rgba(212, 175, 55, 0.4),
            0 0 100px rgba(255, 215, 0, 0.2),
            inset -15px -15px 25px rgba(0, 0, 0, 0.3),
            inset 8px 8px 20px rgba(255, 255, 255, 0.15)
          `,
          animation: 'moon-glow 8s ease-in-out infinite alternate',
          opacity: 0.6
        }}
      >
        {/* Moon crater details */}
        <div 
          className="absolute rounded-full"
          style={{
            top: '25%',
            right: '30%',
            width: '12px',
            height: '12px',
            background: 'rgba(0, 0, 0, 0.2)',
            boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            bottom: '35%',
            left: '25%',
            width: '8px',
            height: '8px',
            background: 'rgba(0, 0, 0, 0.15)',
            boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, 0.2)'
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            top: '60%',
            right: '20%',
            width: '6px',
            height: '6px',
            background: 'rgba(0, 0, 0, 0.1)',
            boxShadow: 'inset 1px 1px 2px rgba(0, 0, 0, 0.15)'
          }}
        />
      </div>

      {/* Constellation lines effect */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.3) 49%, rgba(212, 175, 55, 0.3) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.2) 49%, rgba(212, 175, 55, 0.2) 51%, transparent 52%)
          `,
          backgroundSize: '300px 300px, 250px 250px',
          animation: 'constellation-drift 40s linear infinite'
        }}
      />
    </div>
  );
}