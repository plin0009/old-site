import PropTypes from 'prop-types';
import React from 'react';

const Contact = ({email}) => (
    <section className="section" >
        <div className="container box" id="contact">
            <div className="columns is-vcentered is-multiline">
                <div className="column is-12 has-text-centered">
                    <h2 className="title is-2 has-text-weight-light">Let's <span className="is-emphasized">chat</span>!</h2>
                    <h2 className="subtitle">Shoot me an <a className="is-emphasized" href={"mailto:" + email}>email</a>.</h2>
                    <div className="columns is-centered is-mobile">
                        <div className="column is-narrow"><p className="subtitle">I'm on</p></div>
                        <div className="column is-narrow flex-centered"><a href="https://twitter.com/impeterlin" className="platform-symbol"><svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 203.18"><path class="a" d="M78.62,203.18C173,203.18,224.56,125,224.56,57.24q0-3.33-.15-6.63A104.24,104.24,0,0,0,250,24.05a102.11,102.11,0,0,1-29.46,8.08A51.52,51.52,0,0,0,243.1,3.76a103.15,103.15,0,0,1-32.57,12.45A51.34,51.34,0,0,0,123.12,63,145.59,145.59,0,0,1,17.4,9.39,51.33,51.33,0,0,0,33.28,77.87a50.87,50.87,0,0,1-23.23-6.42c0,.22,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.29,51.42,51.42,0,0,1-23.17.88,51.34,51.34,0,0,0,47.92,35.62,102.91,102.91,0,0,1-63.7,22A105.19,105.19,0,0,1,0,180.14a145.17,145.17,0,0,0,78.62,23"/></svg></a></div>
                        <div className="column is-narrow flex-centered"><a href="https://www.linkedin.com/in/impeterlin/" className="platform-symbol"><svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a></div>
                        <div className="column is-narrow flex-centered"><a href="https://www.instagram.com/impeterlin/" className="platform-symbol"><svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78,78,0,0,1,29,18.85,78,78,0,0,1,18.85,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.57,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.51,83.51,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78,78,0,0,1-29-18.85,78,78,0,0,1-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78,78,0,0,1,18.85-29,78,78,0,0,1,29-18.85c8.88-3.45,22.22-7.55,46.78-8.67,26.57-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.68,123.68,0,0,0,46.36,46.36,123.68,123.68,0,0,0,17.3,91c-6.22,16-10.48,34.34-11.7,61.15S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.68,123.68,0,0,0,29.06,44.62A123.52,123.52,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.74,128.74,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.52,123.52,0,0,0-29.05-44.62A123.68,123.68,0,0,0,421,17.3c-16-6.22-34.34-10.48-61.15-11.7S324.42,4.08,256,4.08Z"/><path d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.35,129.35,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z"/><circle cx="390.48" cy="121.52" r="30.23"/></svg></a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
Contact.propTypes = {
    email: PropTypes.string
};
Contact.defaultProps = {
    email: 'plin00009@gmail.com'
};
export default Contact;