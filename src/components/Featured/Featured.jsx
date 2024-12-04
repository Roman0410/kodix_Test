import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostDetails from '../../screens/postDetails/PostDetails';
import styles from '../../screens/postDetails/PostDetails.module.scss';

const FeaturedPost = () => {
  const [post, setPost] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/13')
      .then((response) => {
        setPost(response.data);
        return axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
      })
      .then((response) => {
        setAuthor(response.data);
        return axios.get('https://jsonplaceholder.typicode.com/photos/10');
      })
      .then((response) => {
        setPhoto(response.data);
      })
      .catch((error) => {
        setError('Error fetching featured post data.');
      });
  }, []);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  if (error) {
    return <p>{error}</p>;
  }

  return <PostDetails post={post} photo={photo} author={author} date={formattedDate} postDetailsClass={styles.featured} />;
};

export default FeaturedPost;
