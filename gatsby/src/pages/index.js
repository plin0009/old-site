import React from "react";
import SEO from "../components/seo";

import "../styles/styles.scss";
import Welcome from "../components/welcome";
import About from "../components/about";
import Showcase from "../components/showcase";
import Contact from "../components/contact";


const IndexPage = () => {
  return (
    <>
      <SEO title="Developer and Designer" />
      <Welcome passion="exploring"/>
      <About description="I'm a 16-year-old living near Toronto, Canada. Learning lots about full-stack web development. I'm also passionate about game development and digital illustration. I love participating in contests and hackathons. Always looking for more opportunities!"/>
      <Showcase/>
      <Contact email="plin0009@gmail.com"/>
    </>
  );
};

export default IndexPage;