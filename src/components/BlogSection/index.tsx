import React from 'react';
import Image from 'next/image'; // Import Image from Next.js for optimized images

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h1 className="text-3xl font-bold mb-4">
        Tips, tendencias y todo lo que necesitas pa’ ir siempre un paso adelante.
      </h1>
      <p className="mb-6">
        No hay lugar para quedarse atrás. Acá compartimos las últimas tendencias, tips y estrategias en experiencia del cliente e investigación de mercados.
        Encontrá todo lo necesario para que tu marca siga innovando y rompiendo moldes.
      </p>
      
      <div className="blog-posts">
        <div className="post mb-4">
          <Image 
            src="/images/blog-photo-1.jpg" 
            alt="Blog Post 1" 
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="mb-2" // Optional: add margin below the image
          />
          <p>Fecha de publicación</p>
          <p>Por: David M.</p>
          <h2 className="font-semibold">Título 1</h2>
        </div>
        
        <div className="post mb-4">
          <Image 
            src="/images/blog-photo-2.jpg" 
            alt="Blog Post 2" 
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="mb-2" // Optional: add margin below the image
          />
          <p>Fecha de publicación</p>
          <p>Por: Camila</p>
          <h2 className="font-semibold">Título 2</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;