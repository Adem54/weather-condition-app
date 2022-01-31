
import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import  { WeatherProvider } from './context/WeatherContext';

//https://api.openweathermap.org/data/2.5/onecall?lat=59.208599&lon=9.609790&exclude=daily&appid=d4f62d257c130c9532e08c3e6e3dbd91
function App() {
const [dailyCondition,setDailyCondition]=useState([]);


const values={dailyCondition,setDailyCondition};

useEffect(()=>{

},[]);

  return (
    <WeatherProvider value={values}>
    <Container/>
    </WeatherProvider>
  );
}

export default App;
