import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../PostCard/PostCard';
import styles from './PostCardList.module.scss';

const PostCardList = ({ containerClass, cardClass }) => {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsAndPhotos = async () => {
      try {
        const [postsResponse, photosResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts'),
          axios.get('https://jsonplaceholder.typicode.com/photos'),
        ]);

        const limitedPosts = postsResponse.data.slice(0, 5);
        const limitedPhotos = photosResponse.data.slice(0, 5);

        setPosts(limitedPosts);
        setPhotos(limitedPhotos);
      } catch (err) {
        setError('Failed to load posts or photos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPostsAndPhotos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={`${styles.PostCardList} ${containerClass || ''}`}>
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} image={photos[index]?.url} cardClass={cardClass} />
      ))}
    </div>
  );
};

export default PostCardList;
