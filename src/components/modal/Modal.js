import React from 'react';
import styles from './styles.module.scss';

const Modal = ({ show, children }) => {
  return (
    <div className={show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`}>
      <section className={styles.modalMain}>
        {children}
      </section>
    </div>
  );
};
export default Modal;
