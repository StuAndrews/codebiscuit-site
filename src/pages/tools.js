import React from "react"
import Layout from "../components/layout";
import Img from "gatsby-image";

let urlImageOne = "https://unsplash.com/photos/YVT5aF2QM7M";

export default ({data}) => (
    <Layout>
        <div>
            <h1>So many tools to choose from</h1>
            <p><a href={urlImageOne}><Img fluid={data.image1.childImageSharp.fluid} alt=""/></a></p>
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
        image1:file(relativePath: { eq: "lachlan-donald-617456-unsplash.jpg" }) {
            ...postImage
        }
    }
`;