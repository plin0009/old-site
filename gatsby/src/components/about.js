import PropTypes from "prop-types";
import React from "react";
import profile from '../assets/images/profile.svg';

const About = ({ children }) => (
    <section className="section" id="about">
        <div className="container">
            <div className="box columns is-vcentered">
                <div className="column is-3 is-offset-2 is-half-mobile is-offset-3-mobile">
                    <figure className="image is-square">
                        <img src={profile} alt="A cute vector icon of me."/>
                    </figure>
                </div>
                <div className="column is-4 is-offset-1 has-text-centered-mobile">
                    <h2 className="title has-text-weight-normal">A bit about me...</h2>
                    <p className="has-text-weight-light">{children}</p>
                </div>
            </div>
        </div>
    </section>
);

About.propTypes = {
    description: PropTypes.string
};

About.defaultProps = {
    description: `A few sentences to tell you about my life.`
};

export default About;