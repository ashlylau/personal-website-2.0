import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav} from "react-bootstrap"


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
