import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Render3D', href: '#render3d' },
    { name: 'VFX', href: '#vfx' },
    { name: 'Unity', href: '#unity' }
  ];

  const services = [
    'Desarrollo de Videojuegos',
    'Modelado y Animación 3D',
    'Efectos Visuales',
    'Consultoría Unity',
    'Optimización de Performance',
    'Porting Multiplataforma'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-background to-muted/20 border-t border-border/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-orbitron font-bold text-neon mb-4">
              HAMMER<span className="text-neon-secondary">BOOM</span>
            </h3>
            <p className="text-muted-foreground font-rajdhani mb-6 max-w-md leading-relaxed">
              Creamos experiencias de videojuegos épicas que conectan con los jugadores a nivel emocional. 
              Tu próximo proyecto AAA comienza aquí.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@hammerboom.dev", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold text-foreground mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-rajdhani"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('#sobre-mi')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-rajdhani"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-rajdhani"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold text-foreground mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground font-rajdhani text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground font-rajdhani text-sm mb-4 md:mb-0">
            © 2025 Hammerboom Studio. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;