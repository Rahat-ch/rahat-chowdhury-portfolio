import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';


const ProjectItem = ({ slug, imageData, title, description }) => (
  <div className="indvProject">
    <h2>
      <Link to={`/${slug}/#projectStart`}>{title}</Link>
    </h2>
        <Link to={`/${slug}/#projectStart`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <p>{description}</p>
    <p>
            <Link to={`/${slug}/#projectStart`}>View Project &rarr;</Link>
    </p>
  </div>
)

export default ProjectItem