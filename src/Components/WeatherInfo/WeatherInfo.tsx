import React, { useEffect, createRef } from 'react';
import './WeatherInfo.css';

interface IWeatherInfo {
    SearchQuery: (string | null);
}

interface IWeather {
    weather: string;
    description: string;
    temperature: number;
    humidity: number;
}

let result: IWeather = {weather: "", description: "", temperature: 0, humidity: 0}; 
let weatherRef = createRef<HTMLParagraphElement>()
let descriptionRef = createRef<HTMLParagraphElement>()
let tempRef = createRef<HTMLParagraphElement>()
let humidityRef = createRef<HTMLParagraphElement>()

function WeatherInfo(props: IWeatherInfo) {
    
    useEffect( () => { 
        if(props.SearchQuery?.length !== 0 && props.SearchQuery !== null && props.SearchQuery !== "") {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + props.SearchQuery + '&appid=' + process.env.REACT_APP_API_KEY)
            .then(response => response.json())
                .then(response => {
                    const weatherNode = weatherRef.current;
                    const descriptionNode = descriptionRef.current;
                    const tempNode = tempRef.current;
                    const humidityNode = humidityRef.current;
                    weatherNode!.textContent = response.weather[0].main;
                    descriptionNode!.textContent = response.weather[0].description;
                    tempNode!.textContent = (response.main.temp as number).toString();
                    humidityNode!.textContent = (response.main.humidity as number).toString();
                    
                })
            .catch(() => console.log("Fetch response error"));
        }
    });

    return (
        <div className="WeatherInfoContainer">
            <p ref={weatherRef} id="weather"></p>
            <p ref={descriptionRef} id="description"></p>
            <p ref={tempRef} id="temp"></p>
            <p ref={humidityRef} id="humidity"></p>
        </div>
    );
}

export default WeatherInfo;