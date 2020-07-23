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
        <div className="SearchBarContainer">
            <TextField
                required
                id="locationSearchBar"
                label="Search location"
                variant="outlined"
                error={HasFocus && SearchQuery === ""}  // red outline when TextField is in focus and empty 
                onClick={() => setHasFocus(true)}
                value={SearchQuery}
                onChange={e => handleSearchQueryChange(e.target.value)}
            />

            <Button
                id="queryBttn"
                variant="contained"
                color="secondary"
                onClick={handleQuery}>
                    Submit
             </Button>
        </div>
    );
}

export default LocationSearchBar