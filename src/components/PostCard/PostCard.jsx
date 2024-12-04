import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.scss';

const PostCard = ({ post, image, cardClass }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return (
    <div className={`${styles.PostCard} ${cardClass || ''}`}>
      <Link to={isAuthenticated ? `/posts/${post.id}` : '/login'}>
        <img src={image} alt={post.title} />
        <div className={styles.postInfo}>
          <p className={styles.date}>
            {new Intl.DateTimeFormat('en-US', {
              weekday: 'long',
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            }).format(new Date())}
          </p>
          <div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.body}>{post.body}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
