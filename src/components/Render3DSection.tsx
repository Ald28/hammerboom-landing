import { Box, Layers, Zap, Eye } from 'lucide-react';

const Render3DSection = () => {
  const features = [
    {
      icon: <Box className="w-8 h-8" />,
      title: "Modelado 3D Avanzado",
      description: "Creamos modelos 3D detallados y optimizados para videojuegos con geometría compleja y texturas realistas."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Renderizado Fotorrealista",
      description: "Implementamos técnicas de iluminación y sombreado avanzadas para lograr renders de calidad cinematográfica."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimización de Performance",
      description: "Optimizamos cada asset 3D para mantener altos FPS sin sacrificar calidad visual en el juego final."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visualización en Tiempo Real",
      description: "Desarrollamos sistemas de render en tiempo real para previsualizaciones instantáneas y gameplay fluido."
    }
  ];

  return (
    <section id="render3d" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-neon mb-6">
              RENDER 3D
            </h2>
            <p className="text-xl font-rajdhani text-muted-foreground max-w-3xl mx-auto">
              Transformamos conceptos en realidades visuales impresionantes utilizando las últimas tecnologías 
              de renderizado 3D y modelado avanzado.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-gaming p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary group-hover:text-neon transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-rajdhani leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h3 className="text-2xl font-orbitron font-semibold text-neon-secondary mb-8">
              Herramientas y Tecnologías
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Blender', 'Maya', 'Substance Painter', 'Unreal Engine', 'V-Ray', 'Arnold'].map((tech) => (
                <span 
                  key={tech}
                  className="px-6 py-3 bg-gradient-card border border-primary/20 rounded-lg font-rajdhani font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Render3DSection;