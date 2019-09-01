import PropTypes from "prop-types";
import React from "react";

const Welcome = ({ passion }) => (
    <section className="hero is-medium" id="welcome">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title is-1 has-text-weight-light">
                    Hi, I'm <span className="is-emphasized">Peter</span>.
                </h1>
                <h2 className="subtitle is-4 has-text-weight-light">
                    A high-school computer enthusiast who <span className="is-emphasized">loves {passion}</span>.
                </h2>
            </div>
        </div>
    </section>
);

Welcome.propTypes = {
    passion: PropTypes.string
};

Welcome.defaultProps = {
    passion: '',
};

export default Welcome;