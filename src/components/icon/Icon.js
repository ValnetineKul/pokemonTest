import React from 'react';
import FAIcon from 'react-fontawesome';
import classnames from 'classnames';


// eslint-disable-next-line react/prop-types
const Icon = ({ icon, className, spin }) => (
  <FAIcon spin={spin} name={icon} className={classnames(className)} />
);

export default Icon;
