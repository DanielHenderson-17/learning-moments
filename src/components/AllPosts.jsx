import { useState, useEffect } from "react";
import { getAllPosts } from "../services/postService";
import './AllPosts.css';

export const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="all-posts-container">
            <h2>All Posts</h2>
            <div className="posts-list">
                {posts.map(post => (
                    <div key={post.id} className="post-row">
                        <span className="post-title">{post.title}</span>
                        <span className="post-topic">{post.topic?.name || "No topic"}</span>
                        <span className="post-likes">Likes: {post.likes.length}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
