import React from 'react';
import styles from './ZeroButton.module.css';

const ZeroButton = (props) => {
  return (
    <div
      className={styles.ZeroButton_main}
      onClick={props.click}
    >
      0
    </div>
  );
}

export default ZeroButton;
