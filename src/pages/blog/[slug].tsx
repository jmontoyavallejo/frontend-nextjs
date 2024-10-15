import React from 'react';
import { useRouter } from 'next/router';
import { useBlogs } from '../../hooks/useBlogs';
import FullBlog from '@/components/FullBlog';
import { BlogPost } from '@/types/blog';

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { getBlogBySlug, loading, error } = useBlogs();

  const [blog, setBlog] = React.useState<BlogPost | null>(null);

  React.useEffect(() => {
    if (slug) {
      getBlogBySlug(slug as string).then(setBlog);
    }
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Blog post not found</div>;

  return <FullBlog {...(blog || {})} />;
};

export default BlogPostPage;
