import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

let stylePhotoAttr = {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '14px',
}

let urlImageOne = 'https://unsplash.com/photos/7_AZi5Fe-rU';
let urlImageTwo = 'https://unsplash.com/photos/yj_o0Vn7TSY';
let urlImageThree = 'https://unsplash.com/photos/1qkyck-UL3g';

export default ({data}) => (
    <Layout>
        <div>
            <p>Hi there. Hope you are well.</p>
            <p>At Code Biscuit we provide you with the technology smarts to <strong>achieve your goals</strong>, <strong>realise your dreams</strong> and <strong>turn your ideas into reality</strong>.</p>
            <p style={stylePhotoAttr}>
                <a href={urlImageOne}><Img fluid={data.image1.childImageSharp.fluid} alt="Photo by Ali Yahya"/></a>
                <br/>Photo by Ali Yahya
            </p>
            <p>In other words we help you <strong>build and maintain your projects</strong>, <strong>develop solutions to existing problems</strong> and provide <strong>analysis</strong>, <strong>review</strong>, <strong>recommendations</strong> (ways forward) and <strong>reporting</strong> on your business technology processes.</p>
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
        </div>
    </Layout>
);

export const query = graphql`
    query PostImagesQuery {
        image1:file(relativePath: { eq: "ali-yahya-707983-unsplash.jpg" }) {
            ...postImage
        }
        image2:file(relativePath: { eq: "elevate-755041-unsplash.jpg" }) {
            ...postImage
        }
        image3:file(relativePath: { eq: "james-pond-185593-unsplash.jpg" }) {
            ...postImage
        }
    }
`;