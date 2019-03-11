import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';


const Aproject = ({ imageData, title, description, url, repo, tags }) => (
  <section id="newSection">
    <div className="myProject">
      <p>
        <Link to="/#one">&larr; Back to all Projects</Link>
      </p>
      <h1>{title}</h1>
      <Image fluid={imageData} alt={title} />
      <p>{description}</p>

      <div className="lowerContent">
        <div className="tagWrapper">
          <h4>Technologies used:</h4>
          <ul className="tags">
            {tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="buttonWrapper">
          <a href={url} className="button projbutton" target="_blank">
            View Demo
          </a>
          <br />

          <a href={repo} className="button projbutton" target="_blank">
            View Repository
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Aproject