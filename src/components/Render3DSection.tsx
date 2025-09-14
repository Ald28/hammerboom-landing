import { useState } from 'react';
import { Box, Layers, Zap, Eye } from 'lucide-react';

const Render3DSection = () => {
  const [showSketchfab, setShowSketchfab] = useState(false);

  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Renderizado Fotorrealista",
      description: "Implementamos técnicas de iluminación y sombreado avanzadas para lograr renders de calidad cinematográfica.",
      onClick: () => setShowSketchfab(false)
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visualización en Tiempo Real",
      description: "Desarrollamos sistemas de render en tiempo real para previsualizaciones instantáneas y gameplay fluido.",
      onClick: () => setShowSketchfab(true)
    }
  ];

  return (
    <section id="render3d" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-neon mb-6">
              RENDER 3D
            </h2>
            <p className="text-xl font-rajdhani text-muted-foreground max-w-3xl mx-auto">
              Transformamos conceptos en realidades visuales impresionantes utilizando las últimas tecnologías
              de renderizado 3D y modelado avanzado.
            </p>
          </div>

          {/* Conditional Content */}
          {!showSketchfab ? (
            <>
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="card-gaming p-8 group hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={feature.onClick}
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
            </>
          ) : (
            <>
              {/* Sketchfab Embed */}
              <div className="sketchfab-embed-wrapper mb-12">
                <iframe
                  title="GAZ-69 Soviet four-wheel drive off-road vehicle"
                  frameBorder="0"
                  allowFullScreen
                  mozAllowFullScreen={true}
                  webkitAllowFullScreen={true}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  src="https://sketchfab.com/models/77d0eb71b07b4500bfad49f27150197d/embed"
                  className="w-full h-[500px] rounded-lg shadow-lg"
                ></iframe>
                <p className="text-center text-sm mt-4 text-muted-foreground">
                  <a
                    href="https://sketchfab.com/3d-models/gaz-69-soviet-four-wheel-drive-off-road-vehicle-77d0eb71b07b4500bfad49f27150197d?utm_medium=embed&utm_campaign=share-popup&utm_content=77d0eb71b07b4500bfad49f27150197d"
                    target="_blank"
                    rel="nofollow"
                    className="font-bold text-primary"
                  >
                    GAZ-69 Soviet four-wheel drive off-road vehicle
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://sketchfab.com/petar.gachev?utm_medium=embed&utm_campaign=share-popup&utm_content=77d0eb71b07b4500bfad49f27150197d"
                    target="_blank"
                    rel="nofollow"
                    className="font-bold text-primary"
                  >
                    Peter Gatchev
                  </a>{" "}
                  on{" "}
                  <a
                    href="https://sketchfab.com"
                    target="_blank"
                    rel="nofollow"
                    className="font-bold text-primary"
                  >
                    Sketchfab
                  </a>
                </p>
              </div>

              {/* Back Button */}
              <div className="text-center">
                <button
                  onClick={() => setShowSketchfab(false)}
                  className="px-8 py-3 bg-primary text-background font-rajdhani font-semibold rounded-lg hover:bg-primary/80 transition-all duration-300"
                >
                  ← Volver al contenido anterior
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Render3DSection;