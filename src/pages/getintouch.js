import React from "react"
import Layout from "../components/layout";
import Script from "react-load-script";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

let stylePhotoAttr = {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '14px',
}

let urlImageOne = 'https://unsplash.com/photos/ASKeuOZqhYU';

const GetInTouch = () => (
    <StaticQuery
        query={ graphql`
            query GetInTouchQuery {
                image1:file(relativePath: { eq: "jason-rosewell-60014-unsplash.jpg" }) {
                ...postImage
                }
            }
        `}
        render={data => (
            <Layout>
                <div dangerouslySetInnerHTML={{__html: `<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>`, }}></div>
                <h2>We'd love to hear from you!</h2>
                <p style={stylePhotoAttr}>
                    <a href={urlImageOne}><Img fluid={data.image1.childImageSharp.fluid} alt="Photo by Jason Rosewell"/></a>
                    <br/>Photo by Jason Rosewell
                </p>
                <Script url="https://paperform.co/__embed" />
                <div data-paperform-id="mmgyqlli"></div>
            </Layout>
        )}
    />
)

export default GetInTouch