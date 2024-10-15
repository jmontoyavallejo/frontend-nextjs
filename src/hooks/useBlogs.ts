import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { fetchBlogs, fetchBlogBySlug } from '@/utils/api';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs');
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const getBlogBySlug = async (slug: string) => {
    try {
      return await fetchBlogBySlug(slug);
    } catch (error) {
        console.error('Error fetching blog post:', error);
      setError('Failed to fetch blog post');
      return null;
    }
  };

  return { blogs, loading, error, getBlogBySlug };
};
export interface Blog {
    slug: string;
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
    tags: string[];
    imageUrl: string;
    readTime: number;
  }
  
  export interface UseBlogsResult {
    blogs: Blog[];
    loading: boolean;
    error: string | null;
  }
  