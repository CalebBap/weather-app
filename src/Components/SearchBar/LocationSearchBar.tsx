import React from 'react';
import { TextField } from '@material-ui/core';
import './LocationSearchBar.css';

interface ISearchBarProps{
    SetUserInput: (a: string) => void;
}

function LocationSearchBar(props: ISearchBarProps){

    return(
        <div className="SearchBarContainer">
            <TextField
                required
                id="locationSearchBar"
                label="Search location"
                variant="outlined"
            />
        </div>
    );
}

export default LocationSearchBar