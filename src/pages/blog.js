import React from "react"
import Layout from "../components/layout";
import Img from "gatsby-image";

export default ({data}) => (
    <Layout>
        <Img 
            className="bg-fix"
            css={{ top: 0, left: 0, right: 0, bottom: 0 }}
            style={{position: 'absolute' }}
            fluid={data.imageBackground.childImageSharp.fluid}
        />
        <div className="content-page content-page-light content-page-light-container">
            <h1>Thought-Leadership in Business Tech</h1>
            <p>
                Thoughts on Business Tech and how it is ...
            </p>
        </div>
    </Layout>
)

export const query = graphql`
    query BlogQuery {
        imageBackground:file(relativePath: { eq: "blog-bg.jpg" }) {
            ...postImage
        }
    }
`;