import React, { useState, useEffect } from "react";

function FetchData() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data.slice(0, 5))); // Fetch only 5 posts
    }, []); // Runs only on mount

    return (
        <div>
            <h2>Posts</h2>
            {
                posts.map(post => (
                    <p key={post.id}>{post.title}</p>
                ))
            }
        </div>
    );
}

export default FetchData;
