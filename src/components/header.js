import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

let menuLinksTotal = 0;

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
        imageLogo: file(relativePath: { eq: "CB-Logo-TransparentBG.png" }) {
          ...logoImage
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div className="header">
          <div className="menu1">
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>
            <nav style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', }}>
              {
                data.site.siteMetadata.menuLinks.map((link, i) => {
                  menuLinksTotal = data.site.siteMetadata.menuLinks.length;
                  if (link.name === 'Home') {
                    return <React.Fragment>
                      <li key={link.name+"1"} style={{ 'listStyleType': 'none', }}>
                        <div style={{ width: 150, float: 'left', }}>
                        <Link
                            to={link.link}
                            style={{ textDecoration: 'none', }}
                          >
                          <Img fixed={data.imageLogo.childImageSharp.fixed} alt={link.name}/>
                        </Link>
                        </div>
                      </li>
                      <li key={link.name+"2"} style={{ 'listStyleType': 'none', paddingLeft: 5, }} >
                        <Link to={link.link} style={{ textDecoration: 'none', color: 'white', }}>{link.name}</Link>
                      </li>
                      <li divider></li>
                    </React.Fragment>
                  } else if (menuLinksTotal === i+1) {
                    return <li key={link.name} style={{ 'listStyleType': 'none', paddingLeft: 5, }} >
                      <a href={link.link} class="cb-green-color" style={{ textDecoration: 'none', }}>{link.name}</a>
                    </li>
                  } else {
                    return <React.Fragment>
                      <li key={link.name} style={{ 'listStyleType': 'none', paddingLeft: 5, }} >
                        <Link to={link.link} style={{ textDecoration: 'none', color: 'white', }}>{link.name}</Link>
                      </li>
                      <li divider></li>
                      </React.Fragment>
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