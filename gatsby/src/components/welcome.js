import PropTypes from "prop-types";
import React from "react";

const Welcome = ({ passion }) => (
    <section className="hero is-medium">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title is-1 has-text-weight-light">
                    Hi, I'm <span className="is-orange">Peter</span>.
                </h1>
                <h2 className="subtitle is-4 has-text-weight-light">
                    A high-school computer enthusiast who <span className="is-orange">loves {passion}</span>.
                </h2>
            </div>
        </div>
    </section>
);

Welcome.propTypes = {
    name: PropTypes.string,
    passion: PropTypes.string
};

Welcome.defaultProps = {
    name: '',
    passion: '',
};

export default Welcome;