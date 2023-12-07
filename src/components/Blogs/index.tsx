// Dependency
import React from "react";

// Styles
import * as styles from "./Blogs.module.css";

// Template
const Blogs = () => {
  return (
    <>
      <section className={styles.blogs}>
        <h2 className={styles.blogs__title}>Thoughts / Insights / Opinions</h2>
        <div className={styles.blogs__list}>
          <article className={styles.article}>
            <span className={styles.article__date}>21 August, 2023</span>
            <h3 className={styles.article__title}><a href={''}>To Git or not to Git: The Question is now</a></h3>
          </article>
          <article className={styles.article}>
            <span className={styles.article__date}>25 September, 2023</span>
            <h3 className={styles.article__title}><a href={''}>To Git or not to Git: The Question is now</a></h3>
          </article>
          <article className={styles.article}>
            <span className={styles.article__date}>06 July, 2023</span>
            <h3 className={styles.article__title}><a href={''}>To Git or not to Git: The Question is now</a></h3>
          </article>
          <article className={styles.article}>
            <span className={styles.article__date}>21 August, 2023</span>
            <h3 className={styles.article__title}><a href={''}>To Git or not to Git: The Question is now</a></h3>
          </article>
          <article className={styles.article}>
            <span className={styles.article__date}>25 September, 2023</span>
            <h3 className={styles.article__title}><a href={''}>To Git or not to Git: The Question is now</a></h3>
          </article>
          <article className={styles.article}>
            <span className={styles.article__date}>06 July, 2023</span>
            <h3 className={styles.article__title}><a href={''}>To Git or not to Git: The Question is now</a></h3>
          </article>
        </div>
      </section>
    </>
  );
};

export default Blogs;