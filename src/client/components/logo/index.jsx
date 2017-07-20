import React from 'react';

import withStyles from '../../styles/withStyles'
import styles from './styles';

const Logo = ({classes, ...props}) => (
  <span className={classes.protoLogo}/>
)

export default withStyles(styles)(Logo)
