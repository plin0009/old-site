import React from "react";
import SEO from "../components/seo";

import "../styles/styles.scss";
import works from '../data/works';

import Welcome from "../components/welcome";
import About from "../components/about";
import Showcase from "../components/showcase";
import Contact from "../components/contact";
import Footer from "../components/footer";


const IndexPage = () => {
  return (
    <>
      <SEO title="Developer and Designer"/>
      <Welcome passion="exploring"/>
      <About>
        I'm a 16-year-old living near <span className="is-emphasized">Toronto, Canada</span>. Learning lots about <span className="is-emphasized">full-stack web development</span>. I'm also passionate about <span className="is-emphasized">game development</span> and <span className="is-emphasized">digital illustration</span>. I love participating in contests and hackathons. Always looking for more opportunities!
      </About>
      <Showcase works={works}/>
      <Contact email="plin0009@gmail.com"/>
      <Footer year={new Date().getFullYear()}/>
    </>
  );
};

export default IndexPage;