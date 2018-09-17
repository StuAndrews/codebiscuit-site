import React from "react";
import Helmet from 'react-helmet';
import Script from 'react-load-script';
import imageOne from './helloquence-61189-unsplash.jpg';
import imageTwo from './james-pond-185593-unsplash.jpg';

let loadPaperForm = '<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>';
let styleSubTitle = {
    fontStyle: 'italic',
    textAlign: 'center',
}
let stylePhotoAttr = {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '14px',
}

let urlImageOne = 'https://unsplash.com/photos/5fNmWej4tAA';
let urlImageTwo = 'https://unsplash.com/photos/1qkyck-UL3g';

export default ({data}) => (
    <div>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="The best tech byte for your business"/>
            <meta name="keywords" content="business technology, technology solutions, it projects, systems review, problem solving"/>
        </Helmet>
        <h1>Code Biscuit</h1>
        <p style={styleSubTitle}>The best tech byte for your business</p>
        <p>Hi there. Hope you are well.</p>
        <p>At Code Biscuit we provide you with the technology smarts to <strong>achieve your goals</strong>, <strong>realise your dreams</strong> and <strong>turn your ideas into reality</strong>.</p>
        <p>In othing words we help you <strong>build and maintain your projects</strong>, <strong>develop solutions to existing problems</strong> and provide <strong>analysis</strong>, <strong>review</strong>, 
            <strong>recommendations</strong> (ways forward) and <strong>reporting</strong> on your business technology processes.</p>
        <p style={stylePhotoAttr}><a href={urlImageOne}><img src={imageOne}/></a><br/>Photo by Helloquence</p>
        <p>A critical element of the service that we provide is to stay abreast of the rapidly evolving technology world. We stay up-to-date with the most effective and efficient advancements and enhancements
            that come with this change.
        </p>
        <p style={stylePhotoAttr}><a href={urlImageTwo}><img src={imageTwo}/></a><br/>Photo by James Pond</p>
        <Script url="https://paperform.co/__embed" />
        <div data-paperform-id="mmgyqlli"></div>
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