import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

//let loadPaperForm = '<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'The best tech byte for your business' },
            { name: 'keywords', content: 'business technology, technology solutions, it project, systems review, problem solving' },
          ]}
        >
          <html lang="en"/> 
        </Helmet>
        <div dangerouslySetInnerHTML={{__html: `<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>`, }}></div>
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 640,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const images = graphql`
fragment postImage on File {
    childImageSharp {
        fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
        }
        
    }
}
fragment logoImage on File {
    childImageSharp {
        fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
        }
    }
}
fragment footerImage on File {
  childImageSharp {
      fluid(maxWidth: 2480) {
          ...GatsbyImageSharpFluid
      }
  }
}
`;

export default Layout
