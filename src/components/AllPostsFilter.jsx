// Combined Filter Bar Component
export const AllPostsFilterBar = ({ setSearchTerm, setSelectedTopic, topics }) => {
  
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };

    return (
        <div className="filter-bar">
            {/* Search bar */}
            <input
                type="text"
                placeholder="Search by title..."
                onChange={handleSearchChange}
                className="search-input"
            />

            {/* Topic dropdown */}
            <select onChange={handleTopicChange} className="topic-dropdown">
                <option value="all">All Topics</option>
                {topics.map((topic) => (
                    <option key={topic.id} value={topic.name}>
                        {topic.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
