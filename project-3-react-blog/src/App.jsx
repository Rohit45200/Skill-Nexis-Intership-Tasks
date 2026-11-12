
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";

import "./App.css";

function App() {

    // Store all blog posts
    const [posts, setPosts] = useState([]);

    // Store search input
    const [search, setSearch] = useState("");

    // Store selected category
    const [category, setCategory] = useState("All");

    // Store loading status
    const [loading, setLoading] = useState(true);

    // Fetch JSON data when component loads
    useEffect(() => {

        fetch("/posts.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load posts");
                }

                return response.json();
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    // Get unique categories from posts
    const categories = [
        "All",
        ...new Set(posts.map((post) => post.category))
    ];

    // Search and filter blog posts
    const filteredPosts = posts.filter((post) => {

        const matchesSearch =
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.description.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || post.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Navbar />

            <main id="home">

                {/* Hero Section */}
                <section className="hero">
                    <h1>Explore Our Tech Blog</h1>

                    <p>
                        Learn programming, web development
                        and modern technologies.
                    </p>
                </section>

                {/* Search and Filter */}
                <section className="controls container">

                    <input
                        type="text"
                        placeholder="Search blog posts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                </section>

                {/* Blog Posts */}
                <section id="posts" className="container posts-section">

                    <h2>Latest Articles</h2>

                    {loading ? (
                        <p className="message">Loading posts...</p>
                    ) : filteredPosts.length > 0 ? (

                        <div className="blog-grid">

                            {filteredPosts.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    post={post}
                                />
                            ))}

                        </div>

                    ) : (

                        <p className="message">
                            No blog posts found.
                        </p>

                    )}

                </section>

            </main>

            <footer className="footer">
                <p>© 2026 TechBlog. All rights reserved.</p>
                <p>Built with React.</p>
            </footer>
        </>
    );
}

export default App;
