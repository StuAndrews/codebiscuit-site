import React from "react"
import Helmet from 'react-helmet'
import Script from 'react-load-script'

let test = '<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>'

export default ({data}) => (
    <div>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="The best tech byte for your business"/>
            <meta name="keywords" content="business technology, technology solutions, it projects, systems review, problem solving"/>
        </Helmet>
        <Script url="https://paperform.co/__embed" />
        <div data-paperform-id="mmgyqlli" data-takeover="1"></div>
    </div>
);

export const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`