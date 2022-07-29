import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./index.module.scss";

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    setTimeout(() => {
      // history.pushState(null, null, "/m/docs/category/总结类目");
      // location.href = "/m/docs/category/webpack闯关";
    }, 1000);
  }, []);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div className={colorMode === "light" ? styles.light_bg : styles.dark_bg}>
      <h1
        className={styles.typing_effect}
        style={{ userSelect: "none" }}
        onClick={() => setA((pre) => ++pre)}
      >
        {siteConfig.title}
      </h1>
      <p
        className="hero__subtitle"
        style={{ userSelect: "none" }}
        onClick={() => setB((pre) => ++pre)}
      >
        {siteConfig.tagline}
      </p>
      {a === 2 && b === 7 && (
        <Link className={styles.buttons} to="/m/docs/category/总结类目"></Link>
      )}
    </div>
  );
}

export default function App() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}
      noFooter
      wrapperClassName={styles.home_wrap}
    >
      <Homepage />
      {/* <div style={{ background: "orange", flex: 1 }}></div> */}
    </Layout>
  );
}
