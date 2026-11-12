
function BlogCard({ post }) {
    return (
        <article className="blog-card">
            <img
                src={post.image}
                alt={post.title}
                className="blog-image"
            />

            <div className="blog-content">
                <span className="category">
                    {post.category}
                </span>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <div className="blog-meta">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                </div>
            </div>
        </article>
    );
}

export default BlogCard;
