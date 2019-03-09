import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';


const ProjectItem = ({ slug, imageData, title, description }) => (
    <div className="indvProject">
        <Link to={`/${slug}`}>
            <Image fluid={imageData} alt={title} />
            <h3>
                <Link to={`/${slug}`}>{title}</Link>
            </h3>
            <p>{description}</p>
            <p>
                <Link to={`/${slug}`}>View Project &rarr;</Link>
            </p>
        </Link>
    </div>
)

export default ProjectItem