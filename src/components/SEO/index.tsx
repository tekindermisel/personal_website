// Dependency
import React from "react";

// Types
type SEOType = {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

// Template
const SEO = ({ title, children }: SEOType) => {
  return (
    <>
      <title>{title}</title>
      {children}
    </>
  )
}

export default SEO;