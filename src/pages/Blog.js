import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    if (newPost.trim() !== '') {
      const post = {
        id: Date.now(),
        content: newPost,
        likes: 0,
        comments: [],
      };
      setPosts([...posts, post]);
      setNewPost('');
    }
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleComment = (postId, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <form onSubmit={handlePostSubmit} className="mb-4">
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="Write your blog post..."
          className="w-full border border-gray-300 rounded p-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        >
          Post
        </button>
      </form>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          post={post}
          onLike={handleLike}
          onComment={handleComment}
        />
      ))}
    </div>
  );
};

export default Blog;
