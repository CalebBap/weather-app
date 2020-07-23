import React from 'react';
import './WeatherGrid.css';
import { TextField } from '@material-ui/core';

interface IWeatherGridProps {
    SearchQuery: (string | null);
}

function WeatherGrid(props: IWeatherGridProps) {
    console.log(props.SearchQuery);
    return (
        <p>{props.SearchQuery}</p>
    )
}

export default WeatherGrid;