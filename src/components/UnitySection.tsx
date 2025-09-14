import { Gamepad2, Code, Cpu, Smartphone } from 'lucide-react';

const UnitySection = () => {
  const unityFeatures = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Desarrollo Multiplataforma",
      description: "Creamos juegos que funcionan perfectamente en PC, consolas, móviles y VR con una sola base de código."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Scripts Personalizados",
      description: "Desarrollamos sistemas de gameplay únicos, mecánicas innovadoras y herramientas customizadas en C#."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Optimización Avanzada",
      description: "Implementamos técnicas de optimización para garantizar rendimiento fluido en diferentes dispositivos."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Integración de APIs",
      description: "Conectamos con servicios externos, analytics, monetización y sistemas de logros para experiencias completas."
    }
  ];

  const platforms = [
    "Windows", "macOS", "Linux", "PlayStation", "Xbox", "Nintendo Switch", 
    "iOS", "Android", "WebGL", "VR/AR"
  ];

  return (
    <section id="unity" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-neon-accent mb-6">
              UNITY ENGINE
            </h2>
            <p className="text-xl font-rajdhani text-muted-foreground max-w-3xl mx-auto">
              Dominamos Unity Engine para crear experiencias de juego inmersivas, desde prototipos 
              rápidos hasta productos finales AAA listos para el mercado.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {unityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="card-gaming p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-accent group-hover:text-neon-accent transition-colors duration-300 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-rajdhani leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Project Types */}
          <div className="bg-gradient-card rounded-2xl p-8 mb-16 border border-border/20">
            <h3 className="text-2xl font-orbitron font-semibold text-center text-foreground mb-8">
              Tipos de Proyectos Unity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: "Juegos 2D", desc: "Plataformas, puzzles y arcade" },
                { type: "Juegos 3D", desc: "Aventuras, RPG y simuladores" },
                { type: "Realidad Virtual", desc: "Experiencias inmersivas VR/AR" },
                { type: "Juegos Móviles", desc: "Optimizados para touch" },
                { type: "Multijugador", desc: "Online y local multiplayer" },
                { type: "Serious Games", desc: "Educativos y entretenimiento" }
              ].map((project, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-300">
                  <h4 className="font-orbitron font-semibold text-accent mb-2">{project.type}</h4>
                  <p className="text-sm text-muted-foreground font-rajdhani">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Platforms */}
          <div className="text-center">
            <h3 className="text-2xl font-orbitron font-semibold text-neon mb-8">
              Plataformas Soportadas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((platform) => (
                <span 
                  key={platform}
                  className="px-4 py-2 bg-gradient-card border border-accent/20 rounded-full font-rajdhani font-medium text-sm text-foreground hover:border-accent/50 hover:text-accent transition-all duration-300 hover:scale-105"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitySection;