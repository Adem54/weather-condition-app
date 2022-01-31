import React from "react";
import { useWeather } from "../context/WeatherContext";

const WeatherCondition = () => {
  const {
    dailyCondition } = useWeather();
  let today = new Date();
  let now = today.getDate();
  const convertUnixTimeToDate = (unixTime) => {
    const milliseconds = unixTime * 1000;
    const dateObject = new Date(milliseconds);
    const dayTime = dateObject.toLocaleString("en-US", { day: "numeric" }); // 9
    let humanDateFormat = dateObject.toLocaleString("en-US", {
      weekday: "long",
    }); //2019-12-9 10:30:15
    return { humanDateFormat, dayTime };
  };

  const convertFromKelvinToCelc = (kelvinTemp) =>
    (kelvinTemp - 273.15).toFixed();
  const getWeatherIcon = (icon) => {
    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return url;
  };
  return (
    <div  className="weather">
      {dailyCondition.map(({ dt, temp, weather }, index) => {
        if (index === 7) return false;
        else {
          const day = convertUnixTimeToDate(dt);
          let maxTemp = convertFromKelvinToCelc(temp.max);
          maxTemp = maxTemp < 1 && maxTemp > -1 ? "0" : maxTemp;
          let minTemp = convertFromKelvinToCelc(temp.min);
          minTemp = minTemp < 1 && minTemp > -1 ? "0" : minTemp;
          const icon = weather[0].icon;
          return (
            <ul
              key={index}
              className={`${Number(day.dayTime) === now ? "active" : ""}`}
            >
              <li key={index}>
                {day.humanDateFormat}
                <img src={getWeatherIcon(icon)} alt="" />
                <span>{maxTemp}℃/{minTemp}℃</span>
                
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default WeatherCondition;

/*
  {dailyCondition.map(({ dt, temp, weather }, index) => {
            
          const day = convertUnixTimeToDate(dt);
          let maxTemp = convertFromKelvinToCelc(temp.max);
          maxTemp = maxTemp < 1 && maxTemp > -1 ? "0" : maxTemp;
          let minTemp = convertFromKelvinToCelc(temp.min);
          minTemp = minTemp < 1 && minTemp > -1 ? "0" : minTemp;
          const icon=weather[0].icon;
          return (
              <ul key={index}  >
            <li key={index}>
            {day} 
            <img  src={getWeatherIcon(icon)} alt="" />
             {maxTemp}{minTemp}
        
              
            </li>
         
             </ul>
          );
        })}

*/
