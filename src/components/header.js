import React from "react";
import { Link } from "gatsby";

let styleSubTitle = {
  fontStyle: 'italic',
  textAlign: 'center',
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#333333',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={styleSubTitle}>The best tech byte for your business</p>
    </div>
  </div>
)

export default Header
