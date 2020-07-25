import React, { useEffect } from 'react';
import './WeatherGrid.css';

interface IWeatherGridProps {
    SearchQuery: (string | null);
}

interface IWeather {
    weather: string;
    description: string;
    temperature: number;
    humidity: number;
}

let result: IWeather = {weather: "", description: "", temperature: 0, humidity: 0}; 

function WeatherGrid(props: IWeatherGridProps) {
    
    useEffect( () => { 
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=' + process.env.REACT_APP_API_KEY)
        .then(response => response.json())
            .then(response => {
                result = {  weather: response.weather[0].main, 
                            description: response.weather[0].description, 
                            temperature: response.main.temp, 
                            humidity: response.main.humidity };
            })
        .catch(() => console.log("Fetch response error"));
    });

    return (
        <p>{result.description}</p>
    );
}

export default WeatherGrid;