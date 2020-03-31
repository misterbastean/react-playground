import React from 'react';
import styles from './NumberButton.module.css';

const NumberButton = (props) => {
  return (
    <div
      className={styles.NumberButton_main}
      onClick={props.click}
    >
      {props.num}
    </div>
  );
}

export default NumberButton;
