import heroCharacters from '@/assets/hero-characters.png'; // imagen de los personajes (como la de la izquierda en tu imagen)
import hexBg from '@/assets/hex-pattern-bg.jpg'; // fondo hexagonal

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-black"
      style={{
        backgroundImage: `url(${hexBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative">
        {/* Left: Characters */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0">
          <img
            src={heroCharacters}
            alt="Video Game Characters"
            className="w-[350px] md:w-[800px] h-[500px] object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            PORTAFOLIO DE VIDEOJUEGOS
          </h1>
          <p className="text-lg md:text-xl font-rajdhani text-gray-300 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit fames felis erat, est montes cursus at egestas nostra faucibus natoque.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Ver trabajos
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;