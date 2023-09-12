import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Headline from "../components/Headline";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={''}>
      <Headline />
    </main>
  )
};

export default IndexPage;

export const Head: HeadFC = () => <title>Mišel Tekinder | FE Tech Lead</title>;
