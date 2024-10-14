import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="relative bg-cover bg-center py-16 md:py-24 text-white">
            <div 
                className="absolute inset-0 z-0"
                style={{ 
                    backgroundImage: 'url(/images/contactSection.jpg)', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="container mx-auto px-4 relative z-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Hablemos, que juntos hacemos que las cosas pasen, ¡y en grande!
                </h1>
                <p className="text-lg md:text-xl mb-4">
                    Con nuestro enfoque innovador y basado en datos, te ayudamos a
                    identificar oportunidades y mejorar cada interacción con tus clientes.
                </p>
                <p className="text-lg md:text-xl">
                    Imagina lo que podrías lograr con insights frescos y estrategias
                    personalizadas que te lleven a un nuevo nivel de éxito.
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
