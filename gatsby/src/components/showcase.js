import PropTypes from "prop-types";
import React, { Component } from "react";

import Work from './work';
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const works = [
    {
        title: 'funlink',
        imageName: 'default',
        description: `A small gaming lobby platform using socket.io. A personal project in progress.`,
        tags: ['web','front end','back end'],
        link: 'https://github.com/plin0009/funlink'
    },
    {
        title: 'Elements',
        imageName: 'elements',
        description: `A simple page to convert your text into chemistry elements' symbols!`,
        tags: ['web','front end'],
        link: 'https://github.com/plin0009/elements'
    },
    {
    },
    {
    },
    {
    },
    {
    },
];

const Showcase = () => {
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
        <section className="section">
            <div className="container">
                <h1 className="title">Here's what I've done.</h1>
                <h2 className="subtitle">You'll be impressed!</h2>
                <div className="columns is-multiline">
                    {works.map((work, index) => 
                        <div className="column is-4">
                            <Work title={work.title} image={images[work.imageName] || images['default']} description={work.description} tags={work.tags} link={work.link}/>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

Showcase.propTypes = {};
Showcase.defaultProps = {};

export default Showcase;