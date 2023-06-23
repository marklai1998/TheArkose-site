import styled from '@emotion/styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Scrollchor } from 'react-scrollchor'

export const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const toggleMobileNav = () => {
    setShowMobileNav(prev => !prev)
  }

  return (
    <>
      <div className="container">
        <div className="d-none d-sm-none d-md-block">
          <Menu className="nav">
            <li>
              <Scrollchor to="#About" animate={{ offset: -100 }}>
                About Us
              </Scrollchor>
            </li>
            <li>
              <Scrollchor to="#Server" animate={{ offset: -100 }}>
                Server
              </Scrollchor>
            </li>
            <li>
              <Scrollchor to="#Services" animate={{ offset: -100 }}>
                Services
              </Scrollchor>
            </li>
            <li>
              <Scrollchor to="#Contact" animate={{ offset: -100 }}>
                Contact Us
              </Scrollchor>
            </li>
            <li>
              <Link to="/map">Online Map</Link>
            </li>
          </Menu>
        </div>
      </div>
      <div className="d-block d-sm-block d-md-none">
        <MenuIcon className="fas fa-bars" onClick={toggleMobileNav} />
        <MobileMenu visible={showMobileNav}>
          <li>
            <Scrollchor to="#About" animate={{ offset: -100 }}>
              About Us
            </Scrollchor>
          </li>
          <li>
            <Scrollchor to="#Server" animate={{ offset: -100 }}>
              Server
            </Scrollchor>
          </li>
          <li>
            <Scrollchor to="#Services" animate={{ offset: -100 }}>
              Services
            </Scrollchor>
          </li>
          <li>
            <Scrollchor to="#Contact" animate={{ offset: -100 }}>
              Contact Us
            </Scrollchor>
          </li>
          <li>
            <Link to="/map">Online Map</Link>
          </li>
        </MobileMenu>
      </div>
    </>
  )
}

const Menu = styled.ul`
  float: right;
  margin-top: 30px;
  z-index: 12;

  & li {
    margin-right: 10px;
  }

  & a {
    color: #fff;
    text-decoration: none;
    transition: all 0.5s;
  }

  & li:last-child a {
    color: #222222;
    background-color: #f5d168;
    padding: 5px 10px;
    border-radius: 5px;
  }
`

const MenuIcon = styled.i`
  margin: 10px;
  padding: 10px 12px;
  font-size: 30px;
  float: right;
  border: #fff 3px solid;
  border-radius: 5px;
  cursor: pointer;
`

const MobileMenu = styled.ul<{ visible: boolean }>`
  float: right;
  z-index: 12;
  list-style: none;
  background-color: #222222;
  padding: 0 30px;
  border-right: #eee8be 10px solid;
  border-radius: 5px;
  margin-top: 76px;
  right: 0;
  position: absolute;
  height: 0;
  overflow: hidden;
  transition: all 0.5s;

  & li {
    margin-bottom: 20px;
    margin-right: 10px;
  }

  & a {
    color: #fff;
    text-decoration: none;
    transition: all 0.5s;
  }

  & li:last-child a {
    color: #222222;
    background-color: #f5d168;
    padding: 5px 10px;
    border-radius: 5px;
  }

  ${({ visible }) =>
    visible
      ? `
  padding: 30px 30px;
  height: 270px;
  overflow: hidden;
  `
      : ''}
`
