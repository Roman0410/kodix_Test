import React from 'react';
import PostCardList from '../../components/PostCardList/PostCardList';
import FeaturedPost from '../../components/Featured/Featured';
import styles from '../../components/PostCardList/PostCardList.module.scss';
import style from '../../components/PostCard/PostCard.module.scss';
import st from '../../screens/postDetails/PostDetails.module.scss';

const Home = () => {
  return (
    <div className="container">
      <div className={st.featuredPost}>
        <p className={st.featuredTitle}>
          <img src="/star.svg" alt="" />
          Featured
        </p>
        <FeaturedPost postDetailsClass={st.featured} />
      </div>

      <PostCardList containerClass={styles.horizontal} cardClass={style.Cardhorizontal} />
    </div>
  );
};

export default Home;
