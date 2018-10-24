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
        <div className="content-page content-page-light">
            <h2>Finding the best tools</h2>
            <div className="text-big">
                The world around us is <strong>growing technology</strong> at an incredible rate, and
                 being able to <strong>find</strong> and then <strong>master</strong> the tools you need is of critical importance.
            </div>
            <div className="text-regular">
                At CodeBiscuit we are dedicated to keeping our ears to the ground of
                 news feeds from across the world, studying and researching the new and the updated, and adapting
                 our training methodologies and practices accordingly.
            </div>
        </div>
    </Layout>
)

export const query = graphql`
    query ToolsQuery {
        imageBackground:file(relativePath: { eq: "tools-bg.jpg" }) {
            ...postImage
        }
    }
`;