import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import {Link} from "gatsby";

export default ({data}) => (
    <Layout>
        <Img 
            className="bg-fix"
            css={{ top: 0, left: 0, right: 0, bottom: 0 }}
            style={{position: 'absolute' }}
            fluid={data.imageBackground.childImageSharp.fluid}
        />
        <div className="content-page content-page-light">
            <div className="text-big">
                We provide you with the technology IQ to achieve your goals, realise your dreams and <strong>turn your ideas into reality.</strong>
            </div>
            <div className="text-regular">
                In other words we help you build and maintain your projects, develop solutions to existing problems and provide analysis, review, recommendations (ways forward) and reporting on your business technology processes.
            </div>
            <div className="text-regular segment-getintouch"><Link to="getintouch" style={{ textDecoration: 'none' }}><button>Get In Touch</button></Link></div>
        </div>
    </Layout>
);

export const query = graphql`
    query IndexQuery {
        imageBackground:file(relativePath: { eq: "home-bg.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1500, rotate: 180) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;