// Dependency
import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

// Styles
import * as styles from "./Header.module.css";

// Template
const Header = () => {

  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <div className={styles.header__logo}>
          <StaticImage src={'./../../images/misel-tekinder.png'} alt={''} />
        </div>
      </Link>
    </header>
  )
};

export default Header;