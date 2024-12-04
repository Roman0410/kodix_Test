import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PostDetails from './PostDetails';
import PostCardList from '../../components/PostCardList/PostCardList';
import styles from './PostDetails.module.scss';

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [author, setAuthor] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        return axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`);
      })
      .then((response) => {
        setAuthor(response.data);
        return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
      })
      .then((response) => {
        setPhoto(response.data);
        return axios.get('https://jsonplaceholder.typicode.com/posts');
      })
      .then((response) => {
        setRelatedPosts(response.data.slice(0, 5));
      })
      .catch((error) => {
        console.error('Error fetching post details:', error);
      });
  }, [id]);

  return (
    <div className="container">
      <div className={`${styles.openPostWrapper}`}>
        <PostDetails post={post} photo={photo} author={author} date={new Date().toLocaleDateString()} />
        <div className={styles.related}>
          <div className={styles.relatedHead}>
            <div className={styles.left}>
              <img src="/file-text.svg" alt="" />
              Related Articles
            </div>
            <Link to="/" className={styles.more}>
              Read more
            </Link>
          </div>
          <PostCardList posts={relatedPosts} containerClass={styles.relatedList} cardClass={styles.relatedCard} />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
