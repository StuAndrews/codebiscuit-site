import React from "react"
import Helmet from 'react-helmet'
import Obfuscate from 'react-obfuscate'

export default ({data}) => (
    <div>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="The best tech byte for your business"/>
            <meta name="keywords" content="business technology, technology solutions, it projects, systems review, problem solving"/>
        </Helmet>
        <div data-paperform-id="mmgyqlli" data-takeover="1"></div><script>(function() { var script = document.createElement('script'); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>
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