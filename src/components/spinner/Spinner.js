import React from 'react';
import preloader from '../../assets/logo/preloader.svg';
import styles from './styles.module.scss';

const Spinner = () => (
  <div className={styles.wrap}>
    <img className={styles.spinner} src={preloader} alt="loading.." />
  </div>
);

export default Spinner;
