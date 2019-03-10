import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';


const Aproject = ({ imageData, title, description, url, repo }) => (
  <div className="myProject">
    <p>
      <Link to="/">&larr; Back to all Projects</Link>
    </p>
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />
    <p>{description}</p>
    <p>
      <Link to={url} target="_blank">
        View Demo
      </Link>
    </p>
    <p>
      <Link to={repo} target="_blank">
        View Repository
      </Link>
    </p>
  </div>
)

export default Aproject