import React from "react"
import Layout from "../components/layout";
import Img from "gatsby-image";

let urlImageOne = "https://unsplash.com/photos/HcZXiWL_piM";

export default ({data}) => (
    <Layout>
        <div>
            <h1>Healthy data grows your business</h1>
            <p><a href={urlImageOne}><Img fluid={data.image1.childImageSharp.fluid} alt=""/></a></p>
            <p>
                There's an important truism that says if you want to understand start measuring.
            </p>
            <p>
                More than ever the data that our businesses use is critical to success (or failure if bad).
                 Good, healthy data gives a fertile ground that when combined with the best tools brings the
                 absolute most benefit to your business.
            </p>
        </div>
    </Layout>
)

export const query = graphql`
    query DataQuery {
        image1:file(relativePath: { eq: "rawpixel-983726-unsplash.jpg" }) {
            ...postImage
        }
    }
`;