import { useState, useEffect } from "react";
import { getAllPosts, getAllTopics } from "../services/postService";
import { AllPostsFilterBar } from "./AllPostsFilter";
import './AllPosts.css';

export const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getAllPosts()
            .then(data => {
                setPosts(data);
                setFilteredPosts(data);  // Initialize filtered posts
            });

        getAllTopics()
            .then(topicData => setTopics(topicData));  // Fetch and set topics from the database
    }, []);

    useEffect(() => {
        filterPosts();
    }, [searchTerm, selectedTopic]);

    const filterPosts = () => {
        let filtered = posts;

        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm)
            );
        }

        if (selectedTopic && selectedTopic !== "all") {
            filtered = filtered.filter(post =>
                post.topic?.name === selectedTopic
            );
        }

        setFilteredPosts(filtered);
    };

    return (
        <div className="all-posts-container">
            <h2>All Posts</h2>

            {/* AllPostsFilterBar: Passing setSearchTerm and setSelectedTopic */}
            <AllPostsFilterBar 
                setSearchTerm={setSearchTerm} 
                setSelectedTopic={setSelectedTopic} 
                topics={topics}  // Pass the topics from the database
            />

            {/* Table Structure for Posts */}
            <table className="posts-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Topic</th>
                        <th># Likes</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPosts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.topic?.name || "No topic"}</td>
                            <td>{post.likes.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
