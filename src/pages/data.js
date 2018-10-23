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
            <h1>Healthy data grows your business</h1>
            <p>
                If you want to understand something start measuring it.
            </p>
            <p>
                More than ever the data that our businesses use is critical to success (or failure if bad).
                 Good, healthy data gives a fertile ground that when combined with the best tools brings the
                 absolute most benefit to your business.
            </p>
            <p>
                At CodeBiscuit we bring an ever-growing wealth of data experience that allows us to determine the most optimal way
                 forward for moving to a new CRM, analysis of your existing data, or bespoke functionality such as
                 custom exporting or importing.
            </p>
        </div>
    </Layout>
)

export const query = graphql`
    query DataQuery {
        imageBackground:file(relativePath: { eq: "data-bg.jpg" }) {
            ...postImage
        }
    }
`;