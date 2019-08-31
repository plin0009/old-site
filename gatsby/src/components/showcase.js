import PropTypes from "prop-types";
import React from "react";

import Work from './work';
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const Showcase = ({works}) => {
    const data = useStaticQuery(graphql`
        query {
            images: allImageSharp {
                edges {
                    node {
                        fluid(maxWidth: 1920) {
                         ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);
    let images = {};
    data.images.edges.forEach(edge => {
        let imageName = String(edge.node.fluid.src).match(/(\w+)\./g)[0].slice(0,-1);
        images[imageName] = edge.node.fluid;
    });
    return (
        <section className="section" id="showcase">
            <div className="container">
                <h1 className="title">Here's what I've done.</h1>
                <h2 className="subtitle">You'll be impressed... soon!</h2>
                <div className="columns is-multiline is-centered is-vcentered">
                    {works.map((work, index) => 
                        <div className="column is-4">
                            <Work title={work.title} image={images[work.imageName] || images['default']} description={work.description} tags={work.tags} link={work.link}/>
                        </div>
                    )}
                </div>
                <div className="columns is-vcentered">
                    <div className="column is-6 has-text-centered has-text-centered-mobile">
                        <h1 className="subtitle">I display my work on several platforms.</h1>
                    </div>
                    <div className="column is-6">
                        <div className="columns is-mobile is-centered">
                            <div className="column is-2 flex-centered">
                                <a className="platform-symbol" href="https://github.com/plin0009"><svg className="platform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.78 117.79"><path fill-rule="evenodd" clip-rule="evenodd" d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"/><path d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"/><path d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"/><path d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"/><path d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"/><path d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"/><path d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.87.56-.92,1.29-.93,1.3.39,1.3.88Z"/><path d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"/></svg></a>
                            </div>
                            <div className="column is-1"></div>
                            <div className="column is-2 flex-centered">
                                <a className="platform-symbol" href="https://devpost.com/plin0009"><svg className="platform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.3 242"><path d="M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z"/><path d="M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74   C208.1,172.8,170.6,195,132.7,195z"/></svg></a>
                            </div>
                            <div className="column is-1"></div>
                            <div className="column is-2 flex-centered">
                                <a className="platform-symbol" href="https://dribbble.com/peterlin"><svg className="platform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" ><path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C22.397 0 0 22.397 0 50C0 77.603 22.397 100 50 100C77.5488 100 100 77.603 100 50C100 22.397 77.5488 0 50 0ZM83.026 23.0477C88.9913 30.3145 92.5705 39.5879 92.679 49.6204C91.269 49.3492 77.1692 46.4751 62.961 48.2646C62.6356 47.5597 62.3644 46.8004 62.0391 46.0412C61.1714 43.9805 60.1952 41.8655 59.2191 39.859C74.9458 33.4599 82.1041 24.2408 83.026 23.0477ZM50 7.37527C60.846 7.37527 70.7701 11.4425 78.308 18.1128C77.5488 19.1974 71.0954 27.82 55.9111 33.5141C48.9154 20.6616 41.1605 10.141 39.9675 8.5141C43.167 7.75488 46.5293 7.37527 50 7.37527ZM31.833 11.3883C32.9718 12.9067 40.564 23.4816 47.6681 36.0629C27.7115 41.3774 10.0868 41.269 8.18872 41.269C10.9544 28.0369 19.9024 17.0282 31.833 11.3883ZM7.26681 50.0542C7.26681 49.6204 7.26681 49.1866 7.26681 48.7527C9.11063 48.8069 29.8265 49.0781 51.1388 42.679C52.3861 45.0651 53.5249 47.5054 54.6095 49.9458C54.0672 50.1085 53.4707 50.2712 52.9284 50.4338C30.9111 57.538 19.1974 76.9523 18.2213 78.5792C11.4425 71.0412 7.26681 61.0087 7.26681 50.0542ZM50 92.7332C40.1302 92.7332 31.0195 89.3709 23.8069 83.731C24.5662 82.1584 33.243 65.4555 57.321 57.0499C57.4295 56.9957 57.4837 56.9957 57.5922 56.9414C63.6117 72.5054 66.0521 85.5748 66.7028 89.3167C61.551 91.5401 55.9111 92.7332 50 92.7332ZM73.807 85.4122C73.3731 82.8091 71.0955 70.3362 65.5098 54.9892C78.9046 52.8742 90.6182 56.3449 92.0824 56.833C90.2386 68.7093 83.4056 78.9588 73.807 85.4122Z"/></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6 has-text-centered">
                        <h1 className="subtitle">Oh, and take a copy:</h1>
                    </div>
                    <div className="column is-6 has-text-centered">
                        <a className="button is-primary is-rounded is-medium" href="/resume.pdf">Resume (PDF)</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

Showcase.propTypes = {
    works: PropTypes.array
};
Showcase.defaultProps = {
    works: []
};

export default Showcase;