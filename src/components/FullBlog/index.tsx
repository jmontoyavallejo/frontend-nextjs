import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../types/blog';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

const FullBlog: React.FC<BlogPost> = ({ title, content, imageSrc, date, author }) => (
  <article className="max-w-3xl mx-auto px-4 py-8">
    <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
      <ArrowLeftIcon className="h-5 w-5 mr-2" />
      Volver al blog
    </Link>
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-gray-600 mb-2">{date} | By: {author}</p>
    <Image 
      src={imageSrc} 
      alt={title} 
      width={1200} 
      height={600} 
      className="w-full object-cover h-64 mb-8"
    />
    <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: content }} />
  </article>
);

export default FullBlog;
