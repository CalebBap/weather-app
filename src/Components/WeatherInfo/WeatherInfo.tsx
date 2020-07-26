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

let weatherRef = createRef<HTMLParagraphElement>()
let descriptionRef = createRef<HTMLParagraphElement>()
let tempRef = createRef<HTMLParagraphElement>()
let humidityRef = createRef<HTMLParagraphElement>()

function WeatherInfo(props: IWeatherInfo) {
    
    useEffect( () => { 
        if(props.SearchQuery?.length !== 0 && props.SearchQuery !== null && props.SearchQuery !== "") {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + props.SearchQuery + '&units=metric&appid=' + process.env.REACT_APP_API_KEY)
            .then(response => response.json())
                .then(response => {
                    updatePage(response);
                })
            .catch(() => console.log("Fetch response error"));
        }
    });

    let updatePage = (response: any) => {
        let weather = response.weather[0].main;
        let bgColor: string = ""; 

        const weatherNode = weatherRef.current;
        const descriptionNode = descriptionRef.current;
        const tempNode = tempRef.current;
        const humidityNode = humidityRef.current;

        weatherNode!.textContent = weather;
        descriptionNode!.textContent = response.weather[0].description;
        tempNode!.textContent = (response.main.temp as number).toString();
        humidityNode!.textContent = (response.main.humidity as number).toString();
        
        
        if(weather === "Thunderstorm" || weather === "Drizzle" || weather === "Rain" || weather === "Tornado"){
            // Dark bluish-gray
            bgColor = "#72757E";
        }else if(weather === "Snow" || weather === "Ash" || weather === "Squall"){
            // White
            bgColor = "#FFFFFF";
        }else if(weather === "Clouds" || weather === "Mist" || weather === "Smoke" || weather === "Haze" || weather === "Dust" || weather === "Fog"){
            // Light gray
            bgColor = "#BEBEBE";
        }else if(weather === "Sand"){
            // Yellow
            bgColor = "#E4CD05";
        }else if(weather === "Clear"){
            // Light blue
            bgColor = "#ADD8E6";
        }
        document.body.style.backgroundColor = bgColor;
    }

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