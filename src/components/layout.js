import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
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
      <React.Fragment>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="The best tech byte for your business"/>
          <meta name="keywords" content="business technology, data hunters, training, technology solutions, it project, systems review, problem solving"/>
          <html lang="en"/> 
        </Helmet>
          <div className="content-body">
            <Header />
            <div className="content-main"
              style={{
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
            <Footer />
          </div>
      </React.Fragment>
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
        fixed(width: 96) {
            ...GatsbyImageSharpFixed
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
