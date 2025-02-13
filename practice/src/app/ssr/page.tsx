// app/posts/page.js

import React from 'react';

// This component will fetch data on the server (SSR)
const Posts = async () => {
  try {
    // Fetch data from JSON Placeholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    // Parse the JSON response
    const posts = await response.json();

    // Return the posts data to be rendered
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
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

// using getServerSideProps
// export async function getServerSideProps() {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       const posts = response.data;
  
//       return {
//         props: {
//           posts,
//         },
//       };
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       return {
//         props: {
//           posts: [],
//         },
//       };
//     }
//   }