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
        <h1>Code Biscuit</h1>
        <em>{data.site.siteMetadata.description}</em>
        <p></p>
        <p>
            Hi there. Hope you are well.
        </p>
        <p>At Code Biscuit we provide you with the technology smarts to <strong>achieve your goals</strong>, <strong>realise your dreams</strong> and <strong>turn your ideas into reality</strong>.</p>
        <p>In other words we help you <strong>build and maintain your projects</strong>, <strong>develop solutions to existing problems</strong> and provide <strong>analysis</strong>, <strong>review</strong>, <strong>recommendations</strong> (ways forward) and <strong>reporting</strong> on your business technology processes.</p>
        <p>A critical element of the service that we provide is to stay abreast of the rapidly evolving technology world. We stay up-to-date with the most effective and efficient advancements and enhancements that come with this change.</p>
        <p></p>
        <p>We'd love to hear from you! Please contact Stu Andrews at <Obfuscate email="stu.andrews@codebiscuit.com" headers={{ subject: 'Code Biscuit Enquiry'}}/>.</p>
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