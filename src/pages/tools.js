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
            <h1>So many tools to choose from</h1>
            <p>The world around us is growing technology at an incredible rate, and it should not be on your shoulders
                to stress and worry about which tools are the best to help your business.
            </p>
            <p>At CodeBiscuit we are dedicated to monitoring and keeping track of the best tools
                 in the marketplace. We keep our ears to the ground of news feeds from across the world, listening
                 and for that new startup or existing company release. We study and research every single day
                 what the tech world is up to.
            </p>
            <p>
                As well, it is not enough just to know about the best tools. You have to be able to use them,
                and use them well.
            </p>
            <p>
                What we provide at CodeBiscuit is the wisdom to choose the right tools and the help and training in them to bring the greatest
                 benefit to your business.
            </p>
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