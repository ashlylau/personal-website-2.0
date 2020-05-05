import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, marginBottom: 0}}>
    <Link to={props.to} className='navbar-link'>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <nav style={{paddingTop: `1rem`, position: 'fixed', top: 0, width: '100%', zIndex: 1}}>
        <ul style={{ listStyle: `none`, float: `left` }}>
          <ListLink to="/">HOME</ListLink>
          <ListLink to="/projects/">PROJECTS</ListLink>
        </ul>
        <ul style={{ listStyle: `none`, float: `right`}}>
          <ListLink to="/about/">ABOUT</ListLink>
          <ListLink to="/contact/">CONTACT</ListLink>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
