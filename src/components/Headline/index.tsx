import * as React from "react";

import * as styles from "./Headline.module.css";

const Headline = () => {
  return (
    <div className={`${styles.headline}`}>
        <p className={styles.headline__subtitle}>Hello There! 👋</p>
        <h1 className={styles.headline__title}>I am Misel, I help engineers excel in their career while building high quality digital products</h1>
        <p className={styles.headline__description}>Throughout the past 15 years within the outsourcing industry, I have been engaged in the development of digital platforms and JavaScript applications for prominent companies in the retail and educational technology sectors. These include established brands such as Adidas, Nike, Pearson, and Coop.</p>
        <p className={styles.headline__description}>My professional journey has involved the consistent mentoring, development, and leadership of multi-cultural teams, encompassing both in-person and virtual collaboration.</p>
        <p className={styles.headline__description}>If you seek professional guidance in front-end development, strive to propel your career to greater heights, or require training in ReactJS/JAMStack for yourself or your team, do not hesitate to contact me.</p>
        <p className={styles.headline__description}>You should follow me on <a href={'https://www.linkedin.com/in/miseltekinder/'} target="_blank">LinkedIn</a> where i post interesting stuff from FE world.</p>
    </div>
  )
};

export default Headline;