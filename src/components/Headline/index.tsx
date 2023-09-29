import * as React from "react";

import * as styles from "./Headline.module.css";

const Headline = () => {
  return (
    <div className={`${styles.headline}`}>
        <p className={styles.headline__subtitle}>Hello There! 👋</p>
        <h1 className={styles.headline__title}>I am Misel and I help engineers excel in their career while building high quality digital products</h1>
        <p className={styles.headline__description}>Over the last 15+ years in the outsourcing industry i've been hired to work on projects for enterprise-level clients building digital platforms and JavaScript applications for major brands from retail and edtech industries. Companies like: Adidas, Nike, Pearson, Coop ...</p>
        <p className={styles.headline__description}></p>
        <p className={styles.headline__description}>You should follow me on <a href={'https://www.linkedin.com/in/miseltekinder/'} target="_blank">LinkedIn</a> i post interesting stuff from FE world.</p>
    </div>
  )
};

export default Headline;