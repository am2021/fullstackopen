import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Weather = ({ city }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [ weather, setWeather ] = useState([])
    const call = `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
    

    useEffect(() => {
        console.log('effect')
        axios
          .get(call)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
          })
      }, [call, weather])

    if(weather.length === 0){
        return (
            <div>
                <h2>Weather in {city}</h2>
                <h3>temperature: {weather.current.temperature}</h3>
                <img src={weather.current.weather_icons} alt={`${city} weather icon`} height="100" width="100"/>
                <h3>wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</h3>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default Weather