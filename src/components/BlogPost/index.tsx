interface BlogPostProps {
  title: string;
  excerpt: string;
}

const BlogPost = ({ title, excerpt }: BlogPostProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{excerpt}</p>
    </div>
  );
};

export default BlogPost;
