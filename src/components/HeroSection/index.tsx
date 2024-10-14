import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-purple-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Enfocados en <br />
          <span className="text-6xl">tu cliente</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Transformamos la experiencia del cliente en una herramienta
          poderosa para tu negocio. Nada de suposiciones; con datos sólidos,
          obtenidos directamente de tus clientes a través de investigaciones
          que te dan insights de valor y 100% accionables.
        </p>
        <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition duration-300">
          ¡Quiero saber más!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
