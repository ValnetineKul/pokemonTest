import React, { useState } from 'react';
import * as classnames from 'classnames';
import styles from './input.module.scss';
import Icon from '../icon/Icon';


const Input = (
  {
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    containerClassname,
  },
) => {

  const [isShowPassword, setIsShowPassword] = useState(false);
  const typeSwitch = isShowPassword ? 'text' : type;
  const iconEye = isShowPassword ? <Icon icon="eye" /> : <Icon icon="eye-slash" />;

  return (
    <div className={classnames(styles.inputContainer, containerClassname)}>
      <div className={classnames(styles.inputWrapper, className)}>
        <input
          name={name}
          type={typeSwitch}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={classnames(
            styles.input,
            type === 'password' ? styles.input_password : '',
            type === 'search' ? styles.input_search : '',
          )}
          style={error && { border: 'solid 1px red' }}
        />
        {type === 'search' && (
          <div className={styles['icon-magnifier']}>
            <Icon icon="search" />
          </div>
        )}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setIsShowPassword(!isShowPassword)}
            className={styles.iconWrapper}
          >
            {iconEye}
          </button>
        )}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
