import React from 'react';
import styles from './DayCard.module.css';

const DayCard = (props) => {
  const classes = props.selected ?
    `${styles.container} ${styles.selected}` :
    styles.container

  return (
    <div
      className={classes}
      onClick={() => props.dayCardClick(props.uid)}
    >
      <p className={styles.dayText}>{props.dayName}</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.iconCode}.png`}
        alt="Weather Icon"
      />

      <div className={styles.tempTextContainer}>
        <p className={styles.tempText}>{Math.round(props.highTemp)}&#8457;</p>
        <p className={`${styles.tempText} ${styles.minTemp}`}>{Math.round(props.lowTemp)}&#8457;</p>
      </div>
    </div>
  )
};

export default DayCard;
