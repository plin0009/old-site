import PropTypes from 'prop-types';
import React from 'react';

const Contact = ({email}) => (
    <section className="section has-background-dark">
        <div className="container">
            <div className="columns is-vcentered is-multiline">
                <div className="column is-12 has-text-centered">
                    <h2 className="title">Let's chat!</h2>
                    <h2 className="subtitle">You can find me through <a href={"mailto:" + email}>email</a>.</h2>
                    <p>(stay tuned for other ways to contact me)</p>
                </div>
            </div>
        </div>
    </section>
);
Contact.propTypes = {};
Contact.defaultProps = {};
export default Contact;