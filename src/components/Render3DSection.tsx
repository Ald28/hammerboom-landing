import { useState } from 'react';
import { Layers, Eye } from 'lucide-react';

const Render3DSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<'none' | 'fotorrealista' | 'realtime'>('none');

  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Renderizado Fotorrealista",
      description:
        "Implementamos técnicas de iluminación y sombreado avanzadas para lograr renders de calidad cinematográfica.",
      onClick: () => setSelectedFeature('fotorrealista'),
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visualización en Tiempo Real",
      description:
        "Desarrollamos sistemas de render en tiempo real para previsualizaciones instantáneas y gameplay fluido.",
      onClick: () => setSelectedFeature('realtime'),
    },
  ];

  const fotorrealistaModels = [
    {
      title: "Jeep-ish offroad vehicle",
      author: "✮𝖀𝖓𝖋𝖔𝖗𝖌𝖊𝖙𝖙𝖆𝖇𝖑𝖊 𝕹𝖆𝖒𝖊✮",
      modelUrl: "https://sketchfab.com/models/b5fb86ce8a244ddc95801c1d43b01612/embed",
      pageUrl:
        "https://sketchfab.com/3d-models/jeep-ish-offroad-vehicle-b5fb86ce8a244ddc95801c1d43b01612",
      authorUrl: "https://sketchfab.com/UnforgettableName",
    },
    {
      title: "2007 Jeep Wrangler Rubicon",
      author: "Ddiaz Design",
      modelUrl: "https://sketchfab.com/models/693abb51754b46e28edd06c2c9b6b861/embed",
      pageUrl:
        "https://sketchfab.com/3d-models/2007-jeep-wrangler-rubicon-693abb51754b46e28edd06c2c9b6b861",
      authorUrl: "https://sketchfab.com/ddiaz-design",
    },
    {
      title: "Jeep WW2 Willys MB Monster",
      author: "valerij1987",
      modelUrl: "https://sketchfab.com/models/c5cb5d1efd7e46dd9749607c20a846ab/embed",
      pageUrl:
        "https://sketchfab.com/3d-models/jeep-ww2-willys-mb-monster-c5cb5d1efd7e46dd9749607c20a846ab",
      authorUrl: "https://sketchfab.com/valerij1987",
    },
    {
      title: "Jeep car",
      author: "3Dji",
      modelUrl: "https://sketchfab.com/models/9f03130a0d2849e6b050130aa3d860f3/embed",
      pageUrl:
        "https://sketchfab.com/3d-models/jeep-car-9f03130a0d2849e6b050130aa3d860f3",
      authorUrl: "https://sketchfab.com/3Dji",
    },
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

          {/* Conditional Rendering */}
          {selectedFeature === 'none' && (
            <>
              {/* Feature Cards */}
              <div className="flex overflow-x-auto space-x-6 pb-4 mb-16">
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
          )}

          {/* Fotorrealista Section */}
          {selectedFeature === 'fotorrealista' && (
            <>
              <div className="flex overflow-x-auto space-x-6 pb-4 mb-16">
                {fotorrealistaModels.map((model, i) => (
                  <div
                    key={i}
                    className="min-w-[320px] max-w-[400px] bg-card p-4 rounded-lg shadow-lg border border-primary/20 flex-shrink-0"
                  >
                    <iframe
                      title={model.title}
                      frameBorder="0"
                      allowFullScreen
                      mozAllowFullScreen={true}
                      webkitAllowFullScreen={true}
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking="true"
                      execution-while-out-of-viewport="true"
                      execution-while-not-rendered="true"
                      web-share="true"
                      src={model.modelUrl}
                      className="w-full h-[300px] rounded-md"
                    ></iframe>
                    <p className="text-sm mt-2 text-muted-foreground font-rajdhani">
                      <a href={model.pageUrl} target="_blank" rel="nofollow" className="font-bold text-primary">
                        {model.title}
                      </a>{" "}
                      by{" "}
                      <a href={model.authorUrl} target="_blank" rel="nofollow" className="font-bold text-primary">
                        {model.author}
                      </a>{" "}
                      on{" "}
                      <a href="https://sketchfab.com" target="_blank" rel="nofollow" className="font-bold text-primary">
                        Sketchfab
                      </a>
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setSelectedFeature('none')}
                  className="px-8 py-3 bg-primary text-background font-rajdhani font-semibold rounded-lg hover:bg-primary/80 transition-all duration-300"
                >
                  ← Volver al contenido anterior
                </button>
              </div>
            </>
          )}

          {/* Realtime Section */}
          {selectedFeature === 'realtime' && (
            <>
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
              </div>

              <div className="text-center">
                <button
                  onClick={() => setSelectedFeature('none')}
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