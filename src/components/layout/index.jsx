

import React from 'react'
import {Link} from 'react-router-dom'

import Nav from 'components/nav'
import Footer from 'components/footer'
import Logo from 'components/logo'

import {icon as navIcon} from 'components/footer/footer.scss'

const Layout = ({children, ...props}) => (
  <div {...props}>
    <Nav>
      <Link to="/"><Logo/></Link>
    </Nav>

    {children}

    <Footer>
      <Link className={navIcon} to='https://github.com/0777144/proto' target='_blank' rel='noopener noreferrer'><i className='icon-github' /></Link>
    </Footer>
  </div>
)

export default Layout
