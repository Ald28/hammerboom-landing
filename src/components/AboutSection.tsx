import { Award, Users, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const teamValues = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelencia Técnica",
      description: "Nos comprometemos con los más altos estándares de calidad en cada línea de código y cada pixel renderizado."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración Creativa",
      description: "Trabajamos en equipo combinando diferentes talentos para crear experiencias únicas e innovadoras."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entregas Puntuales",
      description: "Respetamos los plazos y mantenemos comunicación constante durante todo el proceso de desarrollo."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Enfoque en Resultados",
      description: "Cada proyecto tiene objetivos claros y medibles, trabajamos hasta alcanzar la visión del cliente."
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-neon mb-6">
              SOBRE NOSOTROS
            </h2>
            <p className="text-xl font-rajdhani text-muted-foreground max-w-3xl mx-auto">
              Somos HAMMERBOOM, un equipo apasionado de desarrolladores y artistas digitales 
              especializados en crear experiencias de videojuegos inolvidables.
            </p>
          </div>

          {/* Main Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-orbitron font-bold text-neon-secondary mb-6">
                Nuestra Historia
              </h3>
              <div className="space-y-4 font-rajdhani text-lg text-muted-foreground leading-relaxed">
                <p>
                  Comenzamos como un grupo de desarrolladores independientes unidos por la pasión 
                  de crear mundos virtuales que cautiven y emocionen a los jugadores.
                </p>
                <p>
                  Cada proyecto es una oportunidad para innovar, experimentar con nuevas tecnologías 
                  y superar los límites de lo que es posible en el entretenimiento interactivo.
                </p>
              </div>
            </div>
            
            <div className="card-gaming p-8 text-center">
              <h4 className="text-2xl font-orbitron font-bold text-neon-accent mb-6">
                Nuestros Números
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-orbitron font-bold text-primary mb-2">50+</div>
                  <div className="text-sm font-rajdhani text-muted-foreground uppercase tracking-wider">
                    Proyectos Completados
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-orbitron font-bold text-secondary mb-2">5+</div>
                  <div className="text-sm font-rajdhani text-muted-foreground uppercase tracking-wider">
                    Años de Experiencia
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-orbitron font-bold text-accent mb-2">100%</div>
                  <div className="text-sm font-rajdhani text-muted-foreground uppercase tracking-wider">
                    Proyectos Entregados
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-orbitron font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm font-rajdhani text-muted-foreground uppercase tracking-wider">
                    Soporte Disponible
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Values */}
          <div>
            <h3 className="text-3xl font-orbitron font-bold text-center text-foreground mb-12">
              Nuestros Valores
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {teamValues.map((value, index) => (
                <div 
                  key={index}
                  className="card-gaming p-6 group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary group-hover:text-neon transition-colors duration-300 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-orbitron font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground font-rajdhani leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;