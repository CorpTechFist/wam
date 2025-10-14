import { useMemo } from 'react';

export function ModernBackground() {
  // Memoize the random values to prevent recalculation on every render
  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => {
      const size = i < 4 ? 'w-3 h-3' : i < 8 ? 'w-2 h-2' : 'w-1 h-1';
      const opacity = i < 4 ? 0.6 : i < 8 ? 0.4 : 0.3;
      return {
        key: i,
        size,
        opacity,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 3,
        gradient: i % 3
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced earth tone gradient orbs with mesh patterns */}
      <div className="absolute top-10 left-10 w-96 h-96 opacity-70">
        <div className="w-full h-full bg-gradient-to-br from-primary/25 to-accent/20 rounded-full blur-3xl animate-pulse mesh-gradient"></div>
        <div className="absolute inset-4 w-80 h-80 bg-gradient-to-tl from-accent/15 to-primary/10 rounded-full blur-2xl animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="absolute top-1/3 right-10 w-[32rem] h-[32rem] opacity-60">
        <div className="w-full h-full bg-gradient-to-bl from-accent/20 to-secondary/18 rounded-full blur-3xl animate-pulse mesh-gradient" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-6 w-96 h-96 bg-gradient-to-tr from-secondary/12 to-accent/8 rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="absolute bottom-20 left-1/4 w-[28rem] h-[28rem] opacity-50">
        <div className="w-full h-full bg-gradient-to-tr from-secondary/15 to-primary/12 rounded-full blur-3xl animate-pulse mesh-gradient" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-8 w-80 h-80 bg-gradient-to-bl from-primary/8 to-secondary/6 rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Additional sophisticated orbs */}
      <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/8 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/4 left-2/3 w-80 h-80 bg-gradient-to-l from-secondary/8 to-primary/6 rounded-full blur-3xl animate-pulse opacity-35" style={{ animationDelay: '3.5s' }}></div>
      
      {/* Enhanced grid pattern overlay with depth */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(65, 74, 55, 0.25) 1px, transparent 1px),
               linear-gradient(90deg, rgba(153, 116, 74, 0.2) 1px, transparent 1px),
               linear-gradient(45deg, rgba(219, 194, 166, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px, 60px 60px, 120px 120px'
           }}>
      </div>

      {/* Sophisticated dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `
               radial-gradient(circle at 1px 1px, rgba(65, 74, 55, 0.3) 1px, transparent 0)
             `,
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Enhanced floating particles with varying sizes */}
      <div className="absolute inset-0">
        {particles.map((particle) => {
          return (
            <div
              key={particle.key}
              className={`absolute ${particle.size} rounded-full opacity-30`}
              style={{
                background: particle.gradient === 0 
                  ? '#8B5CF6'
                  : particle.gradient === 1
                  ? '#A78BFA'
                  : '#7C3AED',
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `dreamyFloat ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          );
        })}
      </div>

      {/* Subtle geometric shapes */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent/15 rotate-12 animate-pulse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-secondary/20 -rotate-30 animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
    </div>
  );
}