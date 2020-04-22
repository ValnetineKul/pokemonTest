import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Spinner from '../spinner/Spinner';


const Card = ({
  className,
  title,
  children,
  style,
  spacing = 'none',
  use = 'default',
  isLoading,
}) => (
  <section
    style={style}
    className={classnames(styles.card, styles[spacing], styles[use], className)}
  >
    {title && <h3 className={styles.header}>{title}</h3>}
    {isLoading ? <Spinner /> : children}
  </section>
);

export default Card;
