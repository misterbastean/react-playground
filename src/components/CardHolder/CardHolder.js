import React from 'react';
import DayCard from '../DayCard/DayCard';
import styles from './CardHolder.module.css';

const CardHolder = (props) => {
  let cards;
  cards = props.forecastData.map((item) => {
    return (
      <DayCard
        key={item.dayNum}
        uid={item.dayNum}
        dayName={item.dayName}
        lowTemp={item.lowTemp}
        highTemp={item.highTemp}
        iconCode={item.iconCode}
        dayCardClick={props.dayCardClick}
        selected={props.selectedDay === item.dayNum}
      />
    )
  })

  return (
    <div className={styles.container}>
        {cards}
    </div>
  )
};

export default CardHolder;
