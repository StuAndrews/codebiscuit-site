import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Header = () => (
  <StaticQuery
    query={ graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
        imageLogo: file(relativePath: { eq: "CB-Logo.jpg" }) {
          ...logoImage
        }
      }
    `}
    render={data => (
      <div>
      <div
        style={{
          background: '#2A2567',
          marginBottom: '1.45rem',
        }}
      >
        <div 
          style={{ 
            maxWidth: 150,
          }}
        >
          <Img fluid={data.imageLogo.childImageSharp.fluid} alt=""/>
        </div>
        <div
          style={{
            float: 'right',
          }}
        >
          <h1>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
          </h1>
        </div>
      </div>
      </div>
    )}
  />
  
)

export default Header