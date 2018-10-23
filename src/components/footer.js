import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

const Footer = () => (
    <StaticQuery
        query={graphql`
            query FooterQuery {
                imageFooter: file(relativePath: { eq: "CB-Footer.jpg" }) {
                    ...footerImage
                }
            }
        `}
        render={data => (
            <div className="footer">
                <div className="footer-text content-main">
                    <div className="footer-segment-left footer-subtitle cb-green-color">The best tech byte for your business</div>
                    <div className="footer-segment-right footer-link"><Link to="privacy">Privacy Statement</Link></div>
                    <div className="footer-segment-right">&copy; 2018 Code Biscuit</div>
                </div>
                <div className="footer-image"><Img fluid={data.imageFooter.childImageSharp.fluid} alt=""/></div>
            </div>
        )}
    />
)

export default Footer