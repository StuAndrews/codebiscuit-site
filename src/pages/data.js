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
            <h2>Healthy data grows your business</h2>
            <div className="text-big">
                If you want to understand something <strong>start measuring it</strong>.
            </div>
            <div className="text-regular">
                At CodeBiscuit we bring an ever-growing wealth of data experience that allows us to determine the most optimal way
                 forward for moving to a new CRM, analysis of your existing data, or bespoke functionality such as
                 custom exporting or importing.
            </div>
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