import React from 'react';
import Image from 'next/image';

const InsightCard = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
    <Image src={imageSrc} alt={title} width={300} height={200} className="rounded-lg mb-4 md:mb-0 md:mr-6" />
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Insights = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Todo lo que hacemos pa' que tu marca crezca<br />
          y destaque
        </h2>
        <div className="space-y-8">
          <InsightCard
            title="Investigación de Mercados"
            description="Te ayudamos a entender lo que realmente quieren tus clientes. Definí tu reto y nosotros hacemos el análisis completo, usando técnicas de investigación avanzadas. Nada de adivinanzas, solo datos concretos para que tomes decisiones seguras y potencies tu negocio."
            imageSrc="/images/market-research-1.jpg"
          />
          <InsightCard
            title="Investigación de Mercados"
            description="Nos convertimos en clientes y evaluamos en tiempo real cómo se comporta tu marca. Te entregamos videos, audios y reportes detallados, con datos precisos para que sepas qué funciona y qué no. Desde la atención hasta la resolución de problemas, cada detalle cuenta. Mejora tu servicio con insights claros."
            imageSrc="/images/market-research-2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Insights;
