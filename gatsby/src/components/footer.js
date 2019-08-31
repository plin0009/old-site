import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({year}) => (
    <section className="section" id="footer">
        <div className="container has-text-centered">
            <p>Crafted by me © 2019</p>
            <img className="is-filtered-brown" src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24"/>
        </div>
    </section>
);

Footer.propTypes = {
    year: PropTypes.number
}

Footer.defaultProps = {
    year: 2019
}

export default Footer;