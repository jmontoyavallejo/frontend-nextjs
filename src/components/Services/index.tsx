import React from 'react';

const ServiceCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a href="#" className="text-purple-600 mt-4 inline-block hover:underline">Saber más →</a>
  </div>
);

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Aumentamos tus ventas, construimos lealtad y hacemos<br />
          que tus clientes te recomienden sin parar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Aumentar"
            description="Optimizamos cada interacción con tus clientes, creando experiencias que los inspiran a comprar más y con mayor frecuencia."
          />
          <ServiceCard
            title="Construir"
            description="No solo retener clientes, sino convertirlos en embajadores de tu marca. Con nuestras estrategias, la lealtad es solo el comienzo: creamos relaciones que duran y multiplican."
          />
          <ServiceCard
            title="Hacer"
            description="Creamos experiencias tan poderosas que la recomendación se convierte en un efecto dominó que impulsa tu marca al siguiente nivel."
          />
        </div>
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-700 transition duration-300">
            ¡Quiero hacer crecer mi negocio Ya!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
