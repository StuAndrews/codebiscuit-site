import React from "react";
import Layout from "../components/layout";
import Script from "react-load-script";
import Img from "gatsby-image";

//let loadPaperForm = '<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>';
let stylePhotoAttr = {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '14px',
}

let urlImageOne = 'https://unsplash.com/photos/7_AZi5Fe-rU';
let urlImageTwo = 'https://unsplash.com/photos/yj_o0Vn7TSY';
let urlImageThree = 'https://unsplash.com/photos/1qkyck-UL3g';
let urlImageFour = 'https://unsplash.com/photos/ASKeuOZqhYU';

export default ({data}) => (
    <Layout>
        <div>
            <p>Hi there. Hope you are well.</p>
            <p>At Code Biscuit we provide you with the technology smarts to <strong>achieve your goals</strong>, <strong>realise your dreams</strong> and <strong>turn your ideas into reality</strong>.</p>
            <p style={stylePhotoAttr}>
                <a href={urlImageOne}><Img fluid={data.image1.childImageSharp.fluid} alt="Photo by Ali Yahya"/></a>
                <br/>Photo by Ali Yahya
            </p>
            <p>In othing words we help you <strong>build and maintain your projects</strong>, <strong>develop solutions to existing problems</strong> and provide <strong>analysis</strong>, <strong>review</strong>, <strong>recommendations</strong> (ways forward) and <strong>reporting</strong> on your business technology processes.</p>
            <p style={stylePhotoAttr}>
                <a href={urlImageTwo}><Img fluid={data.image2.childImageSharp.fluid} alt="Photo by Elevate"/></a>
                <br/>Photo by Elevate
            </p>
            <p>A critical element of the service that we provide is to stay abreast of the rapidly evolving technology world. We stay up-to-date with the most effective and efficient advancements and enhancements
                that come with this change.
            </p>
            <p style={stylePhotoAttr}>
                <a href={urlImageThree}><Img fluid={data.image3.childImageSharp.fluid} alt="Photo by James Pond"/></a>
                <br/>Photo by James Pond
            </p>
            <h2>We'd love to hear from you!</h2>
            <p style={stylePhotoAttr}>
                <a href={urlImageFour}><Img fluid={data.image4.childImageSharp.fluid} alt="Photo by Jason Rosewell"/></a>
                <br/>Photo by Jason Rosewell
            </p>
        </div>
        <Script url="https://paperform.co/__embed" />
        <div data-paperform-id="mmgyqlli"></div>
    </Layout>
);

export const rectImage = graphql`
fragment rectImage on File {
    childImageSharp {
        fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
        }
    }
}
`;

export const query = graphql`
    query {
        image1:file(relativePath: { eq: "ali-yahya-707983-unsplash.jpg" }) {
            ...rectImage
        }
        image2:file(relativePath: { eq: "elevate-755041-unsplash.jpg" }) {
            ...rectImage
        }
        image3:file(relativePath: { eq: "james-pond-185593-unsplash.jpg" }) {
            ...rectImage
        }
        image4:file(relativePath: { eq: "jason-rosewell-60014-unsplash.jpg" }) {
            ...rectImage
        }
    }
`;