

import React from 'react';
import Link from '../link';
import {protoLogo} from './logo.scss';

const Logo = (props) => (
  <Link className={protoLogo} to={props.to}/>
);

export default Logo
