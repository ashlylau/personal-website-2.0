import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav} from "react-bootstrap"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `0.4rem`, marginLeft: `0.4rem`, marginBottom: 0}}>
    <Link to={props.to} className='navbar-link'>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Navbar fixed="top" expand='sm'>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className='navbar-align-left'>
              <Link to='/'>HOME</Link>
              <Link to='/projects'>PROJECTS</Link>
            </div>
            <div className='navbar-align-right'>
              <Link to='/about'>ABOUT</Link>
              <Link to='/contact'>CONTACT</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <nav style={{paddingTop: `1rem`, top: 0, width: '100%', zIndex: 1}}>
        <ul style={{ listStyle: `none`, float: `left` }}>
          <ListLink to="/">HOME</ListLink>
          <ListLink to="/projects/">PROJECTS</ListLink>
        </ul>
        <ul style={{ listStyle: `none`, float: `right`}}>
          <ListLink to="/about/">ABOUT</ListLink>
          <ListLink to="/contact/">CONTACT</ListLink>
        </ul>
      </nav> */}
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
