import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <BlogPost title="Blog Post 1" excerpt="Excerpt of blog post 1" />
          <BlogPost title="Blog Post 2" excerpt="Excerpt of blog post 2" />
          <BlogPost title="Blog Post 3" excerpt="Excerpt of blog post 3" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
