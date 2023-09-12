import * as React from "react";

import * as styles from "./Headline.module.css";

const Headline = () => {
  return (
    <div className={`${styles.headline}`}>
        <p className={styles.headline__subtitle}>Mišel Tekinder</p>
        <h1 className={styles.headline__title}>Helping engineers excel in their career while building high quality digital products</h1>
        <p className={styles.headline__description}>A self-taught developer. Living between fast sprints and edgy features. enjoy.ing life as a JavaScript and WordPress enthusiast. Husband and father.</p>
    </div>
  )
};

export default Headline;