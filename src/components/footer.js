import React from "react";
import { graphql, StaticQuery } from "gatsby";
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
            <div
                style={{
                    marginTop: '1.45rem',
                }}
            >
                <Img fluid={data.imageFooter.childImageSharp.fluid} alt=""/>
            </div>
        )}
    />
)

export default Footer