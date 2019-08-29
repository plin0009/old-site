import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';

const Work = ({title, image, description, tags, link}) => (
    <div className="tile is-child card">
        <div className="card-image">
            <figure className="image">
                <Img fluid={image}/>
                <figcaption className="has-text-centered">
                    <p className="subtitle">{description}</p>
                </figcaption>
            </figure>
        </div>
        <div className="card-content">
            <div className="content">
                <a href={link || null}><p className="title">{title}</p></a>
                {/* <p>{description}</p> */}
            </div>
            <div className="tags are-medium">
                {tags.map(tag => <span className="tag">{tag}</span>)}
            </div>
        </div>
    </div>
);
Work.propTypes = {
    title: PropTypes.string,
    image: PropTypes.object,
    description: PropTypes.string,
    tags: PropTypes.array,
    link: PropTypes.string
}
Work.defaultProps = {
    title: `Untitled Work`,
    image: {},
    description: `I can't find the description for this. Sorry!`,
    tags: ['unsorted'],
    link: ''
}
export default Work;