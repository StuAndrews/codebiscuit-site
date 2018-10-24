import React from "react"
import Layout from "../components/layout";
import Script from "react-load-script";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const GetInTouch = () => (
    <StaticQuery
        query={ graphql`
            query GetInTouchQuery {
                imageBackground:file(relativePath: { eq: "getintouch-bg.jpg" }) {
                ...postImage
                }
            }
        `}
        render={data => (
            <Layout>
                <div dangerouslySetInnerHTML={{__html: `<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>`, }}></div>
                <Img 
                    className="bg-fix-getintouch"
                    css={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    style={{position: 'absolute' }}
                    fluid={data.imageBackground.childImageSharp.fluid}
                />
                <div className="content-page content-page-light content-page-getintouch">
                    <h2>We'd love to hear from you!</h2>
                    <Script url="https://paperform.co/__embed" />
                    <div data-paperform-id="mmgyqlli"></div>
                </div>
            </Layout>
        )}
    />
)

export default GetInTouch