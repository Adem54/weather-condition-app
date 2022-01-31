import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import data from "../cities/data.json";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherCondition, setWeatherCondition] = useState({});
  const [city, setCity] = useState("Oslo");
  const currentCoordinate = data.filter((cityData) =>
    cityData.city === city ? cityData : null
  );

  const dailyCondition = weatherCondition?.daily || [];
  const values = {
    weatherCondition,
    dailyCondition,
    setWeatherCondition,
    city,
    setCity,
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${currentCoordinate[0].lat}&lon=${currentCoordinate[0].lng}&exclude&appid=d4f62d257c130c9532e08c3e6e3dbd91`
      )
      .then((response) => setWeatherCondition(response.data));
  }, [city]);

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
export default WeatherContext;
