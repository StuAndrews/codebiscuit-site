import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql, Link } from "gatsby";

import Header from "./header";
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
        <div as="script" dangerouslySetInnerHTML={{__html: `<script type="text/javascript">(function() { var script = document.createElement("script"); script.src = "https://paperform.co/__embed";document.body.appendChild(script); })()</script>`, }}></div>
        <Header siteTitle={data.site.siteMetadata.title} />
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
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
