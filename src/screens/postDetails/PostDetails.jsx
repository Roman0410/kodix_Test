import React from 'react';
import styles from './PostDetails.module.scss';
const PostDetails = ({ post, photo, author, date, postDetailsClass }) => {
  if (!post || !photo || !author) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`${styles.postDetails} ${postDetailsClass || ''}`}>
      <div>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postBody}>{post.body}</p>
      </div>

      <div className={styles.postInfo}>
        <p className={styles.date}>{date}</p>
        <div className={styles.author}>
          <div className={styles.icon}></div>
          <h3>{author.name}</h3>
        </div>
      </div>
      <img src={photo?.url || ''} alt={post?.title || 'Post image'} className={styles.post_image} />

      <div className={styles.share}>
        Share{' '}
        <ul>
          <li>
            <a href="">
              <img src="/facebook.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/twit.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/yt.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostDetails;
