import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectItem from './ProjectItem';



const Projects = () => {

    const data = useStaticQuery(graphql`
      {
        allProjectsJson {
          edges {
            node {
              title
              slug
              description
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `)

      const projectIndex = data.allProjectsJson.edges;

    return (
      <section id="one">
          <h1 className="projectHeader">Projects</h1>
        <div className="projectWrapper">
          {projectIndex.map(({ node: item }) => {
            const title = item.title
            const description = item.description
            const slug = item.slug
            const imageData = item.image.childImageSharp.fluid

            return (
              <ProjectItem
                title={title}
                description={description}
                slug={slug}
                imageData={imageData}
              />
            )
          })}
        </div>
      </section>
    )
} 

export default Projects