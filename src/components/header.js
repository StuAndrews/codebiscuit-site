import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import ReactTooltip from 'react-tooltip';

const Header = () => (
  <StaticQuery
    query={ graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              description
            }
          }
        }
        imageLogo: file(relativePath: { eq: "CB-Logo-BlueBG.jpg" }) {
          ...logoImage
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div
          style={{
          background: '#2A2567',
          marginBottom: '1.45rem',
        }}>
          <div style={{ margin: '0 auto', maxWidth: 900, }} class="menu1">
          <nav style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', }}>
            {
              data.site.siteMetadata.menuLinks.map(link => {
                if (link.name === 'Home') {
                  return <React.Fragment>
                    <li key={link.name} style={{ 'listStyleType': 'none', }}>
                    <div style={{ width: 150, float: 'left', }}>
                    <Link
                        to={link.link}
                        style={{ textDecoration: 'none', }}
                      >
                      <Img fluid={data.imageLogo.childImageSharp.fluid} alt={link.name}/>
                    </Link>
                    </div>
                    <div style={{ textAlign: 'center', color: '#ccc', }} class="headingDescription">{link.description}</div>
                  </li>
                  </React.Fragment>
                } else {
                  return <li key={link.name} style={{ 'listStyleType': 'none', paddingLeft: 5, }} >
                    <Link to={link.link} style={{ textDecoration: 'none', color: 'white', }}>{link.name}</Link>
                    <br/>
                    <p style={{color: '#ccc', }} class="headingDescription">{link.description} </p>
                  </li>
                }
              })
            }
          </nav>
          </div>
        </div>
      </React.Fragment>
    )}
  />
  
)

export default Header