import Header from '../components/header/Header';
import styles from './page.module.css';

const Blog = () => {
  return (
    <div>
      <Header />
      <div className={styles.contentWrapper}>
        <h1>Blog</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Blog;
