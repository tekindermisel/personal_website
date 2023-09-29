// Dependency
import * as React from "react";
import type { HeadProps, PageProps } from "gatsby";

// Components
import SEO from "../components/SEO";
import Header from "../components/Header";
import Headline from "../components/Headline";
import Footer from "../components/Footer";

// Template
const IndexPage = (props: PageProps) => {
  return (
    <>
      <Header />
      <main>
        <Headline />
      </main>
      <Footer />
    </>
  )
};

export default IndexPage;


export const Head = (props: HeadProps) => {
  <SEO title={'Front-end Tech Lead | Mišel Tekinder'}></SEO>
};