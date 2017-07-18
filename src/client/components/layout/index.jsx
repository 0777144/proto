import React from 'react'

import Nav from '../nav'
import Footer from '../footer'
import Logo from '../logo'
import Link from '../link'
import Icon from '../icon'

const Layout = ({children, ...props}) => (
  <div {...props}>
    <Nav>
      <Link clear to="/">
        <Logo/>
      </Link>
    </Nav>

    {children}

    <Footer>
      <Link clear to='https://github.com/0777144/proto' target='_blank' rel='noopener noreferrer'>
        <Icon type='github'/>
      </Link>
    </Footer>
  </div>
)

export default Layout
