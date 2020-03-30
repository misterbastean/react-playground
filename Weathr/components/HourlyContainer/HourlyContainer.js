import React from 'react';
import moment from 'moment';
import HourlyCard from '../HourlyCard/HourlyCard';

const HourlyContainer = (props) => {
  console.log(props.data);


  return (
    <div>
    {props.data.map((item) => {
      console.log(moment.unix(item.dt).format('h:mm A'));
      return (
        <HourlyCard
          key={item.dt}
          time={moment.unix(item.dt).format('h:mm A')}
          temp={item.main.temp}
          wind={item.wind.speed}
        />
      )
    })}
    </div>
  )
};

export default HourlyContainer;
