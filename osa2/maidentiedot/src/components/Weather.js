
import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const ACCESS_KEY = process.env.REACT_APP_API_KEY;
  const CAPITAL = city

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CAPITAL}&appid=${ACCESS_KEY}`)
        .then((response) => {
            setWeather(response.data);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
          })
  }, [CAPITAL, ACCESS_KEY])

  if (!weather) {
    return <p>Loading weather data...</p>;
  }

  const temperatureCelsius = Math.round(weather.main.temp - 273.15);


  return (
        <div>
          <p>Temperature {temperatureCelsius} Celsius</p>
          <img
            alt="weatherImage"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      )
}

export default Weather
