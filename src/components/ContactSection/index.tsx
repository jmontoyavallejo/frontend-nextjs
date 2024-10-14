import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <div style={{ 
            backgroundImage: 'url(/images/contactSection.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            padding: '50px', 
            color: 'white' // Cambia el color del texto si es necesario
        }}>
            <h1 style={{ fontSize: '2.5em' }}>Hablemos, que juntos hacemos que las cosas pasen, ¡y en grande!</h1>
            <p style={{ fontSize: '1.5em' }}>
                Con nuestro enfoque innovador y basado en datos, te ayudamos a
                identificar oportunidades y mejorar cada interacción con tus clientes.
            </p>
            <p style={{ fontSize: '1.5em' }}>
                Imagina lo que podrías lograr con insights frescos y estrategias
                personalizadas que te lleven a un nuevo nivel de éxito.
            </p>
        </div>
    );
};

export default ContactSection;
