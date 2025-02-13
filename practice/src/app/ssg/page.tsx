// app/posts/page.js

import React from 'react';

// This component will receive the 'posts' prop
const Posts = async () => {
  // Fetch data directly inside the component (async function)
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts && posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <div>
        <h1>Posts</h1>
        <p>Error loading posts. Please try again later.</p>
      </div>
    );
  }
};

export default Posts;
