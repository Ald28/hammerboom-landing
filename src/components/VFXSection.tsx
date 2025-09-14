import { Sparkles, Flame, Droplets, Wind } from 'lucide-react';

const VFXSection = () => {
  const vfxTypes = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Efectos de Fuego",
      description: "Sistemas de partículas realistas para explosiones, llamas y efectos pirotécnicos que añaden intensidad dramática."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Simulación de Fluidos",
      description: "Agua, lava y otros líquidos con física realista que responden dinámicamente al entorno del juego."
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Efectos Atmosféricos",
      description: "Niebla, humo, nubes y efectos climáticos que crean ambientes inmersivos y atmósferas únicas."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Efectos Mágicos",
      description: "Hechizos, rayos de energía y efectos sobrenaturales que dan vida a elementos fantásticos."
    }
  ];

  return (
    <section id="vfx" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-neon-secondary mb-6">
              EFECTOS VISUALES
            </h2>
            <p className="text-xl font-rajdhani text-muted-foreground max-w-3xl mx-auto">
              Creamos efectos visuales espectaculares que dan vida a los mundos virtuales, 
              desde partículas simples hasta simulaciones complejas.
            </p>
          </div>

          {/* VFX Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {vfxTypes.map((vfx, index) => (
              <div 
                key={index}
                className="card-gaming p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-secondary group-hover:text-neon-secondary transition-colors duration-300 mb-4">
                    {vfx.icon}
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold mb-3 text-foreground group-hover:text-secondary transition-colors">
                    {vfx.title}
                  </h3>
                  <p className="text-muted-foreground font-rajdhani leading-relaxed">
                    {vfx.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Software Used */}
          <div className="text-center">
            <h3 className="text-2xl font-orbitron font-semibold text-neon-accent mb-8">
              Software Especializado
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['After Effects', 'Houdini', 'Nuke', 'EmberGen', 'RealFlow', 'Particle Illusion'].map((software) => (
                <span 
                  key={software}
                  className="px-6 py-3 bg-gradient-card border border-secondary/20 rounded-lg font-rajdhani font-medium text-foreground hover:border-secondary/50 hover:text-secondary transition-all duration-300 hover:scale-105"
                >
                  {software}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VFXSection;