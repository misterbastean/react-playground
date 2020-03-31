import React from 'react';
import styles from './ClearButton.module.css';

const ClearButton = (props) => (
  <div 
    className={styles.ClearButton__main}
    onClick={props.click}
  >
    clear
  </div>
);

export default ClearButton;
