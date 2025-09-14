import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-neon mb-6">
              CONTACTO
            </h2>
            <p className="text-xl font-rajdhani text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes una idea épica para un videojuego? Hablemos y convirtámosla en realidad. 
              Estamos listos para tu próximo proyecto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold text-neon-secondary mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground">Email</p>
                    <p className="font-orbitron text-foreground">contact@hammerboom.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground">Teléfono</p>
                    <p className="font-orbitron text-foreground">+1 (555) 123-GAME</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-rajdhani text-muted-foreground">Ubicación</p>
                    <p className="font-orbitron text-foreground">Gaming District, Tech City</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-orbitron font-semibold text-foreground mb-6">
                  Síguenos en Redes
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub" },
                    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
                    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" }
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
            </div>

            {/* Contact Form */}
            <div className="card-gaming p-8">
              <h3 className="text-2xl font-orbitron font-bold text-neon-accent mb-8">
                Envíanos un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-rajdhani font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground font-rajdhani"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-rajdhani font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground font-rajdhani"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-rajdhani font-medium text-foreground mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground font-rajdhani"
                    placeholder="Tema de tu consulta"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-rajdhani font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground font-rajdhani resize-none"
                    placeholder="Cuéntanos sobre tu proyecto de videojuego..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-gaming group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;