import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Aproject from '../components/Aproject';

export const query = graphql`
         query($slug: String!) {
           projectsJson(slug: { eq: $slug }) {
             title
             description
             url
             repo
             image {
               childImageSharp {
                 fluid {
                   ...GatsbyImageSharpFluid_tracedSVG
                 }
               }
             }
           }
         }
       `

const ProjectPage = ({ data }) => {
    const project = data.projectsJson;
    const title = project.title;
    const description = project.description;
    const imageData = project.image.childImageSharp.fluid;
    const url = project.url;
    const repo = project.repo;

    return(
        <Layout>
            <section>
                {/* <Aproject
                    title={title}
                    description={description}
                    imageData={imageData}
                    url={url}
                    repo={repo}
                /> */}
            </section>
        </Layout>
    )
};

export default ProjectPage