import React from 'react';
import Image from 'next/image'; // Import Image from Next.js for optimized images

const BlogPost = ({ imageSrc, date, author, title }: { imageSrc: string; date: string; author: string; title: string }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <Image 
      src={imageSrc} 
      alt={title} 
      width={600} 
      height={400} 
      className="w-full object-cover h-48"
    />
    <div className="p-4">
      <p className="text-sm text-gray-600 mb-1">{date}</p>
      <p className="text-sm text-gray-600 mb-2">Por: {author}</p>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Tips, tendencias y todo lo que necesitas pa&apos; ir siempre un paso adelante.
        </h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          No hay lugar para quedarse atrás. Acá compartimos las últimas tendencias, tips y estrategias en experiencia del cliente e investigación de mercados.
          Encontrá todo lo necesario para que tu marca siga innovando y rompiendo moldes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BlogPost 
            imageSrc="/images/blog-photo-1.jpg"
            date="Fecha de publicación"
            author="David M."
            title="Título 1"
          />
          <BlogPost 
            imageSrc="/images/blog-photo-2.jpg"
            date="Fecha de publicación"
            author="Camila"
            title="Título 2"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
