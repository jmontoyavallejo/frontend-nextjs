import { BlogPost } from '@/types/blog';
import blogsData from '@/data/blogs.json';

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return the data from the JSON file
  return blogsData as BlogPost[];
};

export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Find the blog post with the matching slug
  const blog = (blogsData as BlogPost[]).find(blog => blog.slug === slug);
  return blog || null;
};
