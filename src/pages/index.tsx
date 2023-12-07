// Dependency
import * as React from "react";
import type { HeadProps, PageProps } from "gatsby";

// Components
import SEO from "../components/SEO";
import Header from "../components/Header";
import Headline from "../components/Headline";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

// Template
const IndexPage = (props: PageProps) => {
  return (
    <>
      <Header />
      <main>
        <Headline />
        {/* <Blogs /> */}
      </main>
      <Footer />
    </>
  )
};

export default IndexPage;


export const Head = (props: HeadProps) => {
  return <SEO title={'Front-end Tech Lead Consultant | Mišel Tekinder'}></SEO>;
};