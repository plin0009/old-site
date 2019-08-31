import React from "react";

import SEO from "../components/seo";
import "../styles/styles.scss";

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <section className="hero is-fullheight is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Sorry!</h1>
          <h2 className="subtitle">I can't find what you're looking for.</h2>
          <div className="buttons are-large is-centered">
            <a href="../" className="button is-primary is-rounded">Go back?</a>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default NotFoundPage
