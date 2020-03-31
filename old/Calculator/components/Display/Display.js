import React from 'react';
import styles from './Display.module.css';

const Display = (props) => (
  <div className={styles.Display}>
    {props.number}
  </div>
);

export default Display;
