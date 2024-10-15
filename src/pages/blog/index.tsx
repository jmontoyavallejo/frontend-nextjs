import React, { useState } from 'react';
import { useBlogs } from '../../hooks/useBlogs';
import BlogSummary from '../../components/BlogSummary';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const BlogPage: React.FC = () => {
  const { blogs, loading, error } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 mx-1 rounded-full ${
            currentPage === i
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 border border-blue-500'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-8 mt-16 sm:mt-20 md:mt-24 lg:mt-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Tips, tendencias y todo lo que necesitas pa&apos; ir siempre un paso adelante.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          No hay lugar para quedarse atrás. Acá compartimos las últimas tendencias, tips y estrategias en experiencia del cliente e investigación de mercados.
          Encontrá todo lo necesario para que tu marca siga innovando y rompiendo moldes.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12">
        {currentBlogs.map((blog) => (
          <BlogSummary key={blog.slug} {...blog} />
        ))}
      </div>
      <div className="mt-12 flex justify-center items-center">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="mr-2 p-2 rounded-full bg-gray-200 disabled:opacity-50"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="ml-2 p-2 rounded-full bg-gray-200 disabled:opacity-50"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
