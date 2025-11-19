import { Heart } from "lucide-react";

export function Banner() {
  return (
    <div className="relative w-full overflow-hidden border-b border-primary/30">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80')`,
          filter: 'brightness(0.4)'
        }}
      />
      
      
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center px-4 py-32 text-center" style={{
        minHeight: '700px', 
      }}>
       
        {/* Tagline */}
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl mb-4 tracking-tight" style={{
          textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(139,92,246,0.5)'
        }}>
          WE ALL MATTER ALLIANCE
        </h2>
        
        {/* Subtitle */}
        <p className="text-primary text-sm md:text-lg lg:text-xl italic max-w-3xl" style={{
          textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
        }}>
          Building inclusive communities where every voice matters, every life has value
        </p>
      </div>
      
      {/* Bottom Accent Line */}
  
    </div>
  );
}
