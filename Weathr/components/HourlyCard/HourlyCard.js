import React from 'react';
import styles from './HourlyCard.module.css';

const HourlyCard = (props) => (
  <div className={styles.HourlyCardContainer}>
    <p className={`${styles.HourlyCardItem} ${styles.HourlyCardTime}`}>{props.time}</p>
    <p className={`${styles.HourlyCardItem} ${styles.HourlyCardTemp}`}>Temp: {Math.round(props.temp)}&#8457;</p>
    <p className={`${styles.HourlyCardItem} ${styles.HourlyCardWind}`}>Wind: {props.wind}mph</p>
  </div>
);

export default HourlyCard;
