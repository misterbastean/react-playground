import React from 'react';
import styles from './OperationButton.module.css';

const OperationButton = (props) => {
  const signs = {
    add: '+',
    sub: '-',
    mult: 'x',
    div: String.fromCharCode(0x00F7),
    eq: "="
  }
  const sign = signs[props.type]
  return (
    <div
      className={styles.OperationButton__main}
      onClick={props.click}
    >
      {sign}
    </div>
  );
}

export default OperationButton;
