import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../../types/blog';

const BlogSummary: React.FC<BlogPost> = ({ slug, title, excerpt, imageSrc, date, author }) => (
  <div className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-md">
    <div className="w-full sm:w-1/2 h-48 sm:h-auto relative">
      <Image 
        src={imageSrc} 
        alt={title} 
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
    </div>
    <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          {author} • {date}
        </p>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">{excerpt}</p>
      </div>
      <Link href={`/blog/${slug}`} className="text-blue-600 hover:underline self-start">
        Leer más...
      </Link>
    </div>
  </div>
);

export default BlogSummary;
