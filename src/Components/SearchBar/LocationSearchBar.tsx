import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './LocationSearchBar.css';

interface ISearchBarProps{
    SetUserInput: (a: string) => void;
}

function LocationSearchBar(props: ISearchBarProps){
    
    const [SearchQuery, setSearchQuery] = useState<string | null>("");

    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleQuery = () => {
        if(SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: string =  SearchQuery;
            props.SetUserInput(UserInput);
        }else{
            setHasFocus(true);
        }
    }

    return(
        <div className="headerContainer">
            <h1>Find the current weather in </h1>

            <div className="searchBarContainer">
                <TextField
                    required
                    id="locationSearchBar"
                    label=""
                    variant="standard"
                    error={HasFocus && SearchQuery === ""}  // red outline when TextField is in focus and empty 
                    onClick={() => setHasFocus(true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                />
            </div>

            <Button
                id="queryBttn"
                variant="outlined"
                color="default"
                onClick={handleQuery}>
                    Search
            </Button>
        </div>
    );
}

export default LocationSearchBar