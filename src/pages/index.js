import React from "react";
import Layout from "../components/layout";
import Script from "react-load-script";
import Img from "gatsby-image";
import imageOne from '../images/helloquence-61189-unsplash.jpg';
import imageTwo from '../images/james-pond-185593-unsplash.jpg';

//let loadPaperForm = '<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>';
let stylePhotoAttr = {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '14px',
}

let urlImageOne = 'https://unsplash.com/photos/5fNmWej4tAA';
let urlImageTwo = 'https://unsplash.com/photos/1qkyck-UL3g';

export default ({data}) => (
    <Layout>
        <div>
            <p>Hi there. Hope you are well.</p>
            <p>At Code Biscuit we provide you with the technology smarts to <strong>achieve your goals</strong>, <strong>realise your dreams</strong> and <strong>turn your ideas into reality</strong>.</p>
            <p>In othing words we help you <strong>build and maintain your projects</strong>, <strong>develop solutions to existing problems</strong> and provide <strong>analysis</strong>, <strong>review</strong>, 
                <strong>recommendations</strong> (ways forward) and <strong>reporting</strong> on your business technology processes.</p>
            <p style={stylePhotoAttr}>
                <a href={urlImageOne}><Img fluid={data.image1.childImageSharp.fluid} alt="Photo by Hellquence"/></a>
                <br/>Photo by Helloquence
            </p>
            <p>A critical element of the service that we provide is to stay abreast of the rapidly evolving technology world. We stay up-to-date with the most effective and efficient advancements and enhancements
                that come with this change.
            </p>
            <p style={stylePhotoAttr}>
                <a href={urlImageTwo}><Img fluid={data.image2.childImageSharp.fluid} alt="Photo by James Pond"/></a>
                <br/>Photo by James Pond
            </p>
            <Script url="https://paperform.co/__embed" />
            <div data-paperform-id="mmgyqlli"></div>
        </div>
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
        image1:file(relativePath: { eq: "helloquence-61189-unsplash.jpg" }) {
            ...rectImage
        }
        image2:file(relativePath: { eq: "james-pond-185593-unsplash.jpg" }) {
            ...rectImage
        }
    }
`;