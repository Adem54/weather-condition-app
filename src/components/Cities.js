import React from "react";
import data from "../cities/data.json";
import { useWeather } from "../context/WeatherContext";


data.sort((a,b)=>{
  if(a.city<b.city){
      return -1;
  }else return 1;
});

const Cities = () => {
  const { city, setCity } = useWeather();
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="cities">
  
      <select defaultValue="Oslo" onChange={handleChange}  >
        {data.map(({city}, index) => {
          return (
            <option 
           
            key={index} value={city}>
              {city}  
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Cities;
