import React from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const types = [
    {
        value: "bug",
        label: "Bug"
    },
    {
        value: "dark",
        label: "Dark"
    },
    {
        value: "dragon",
        label: "Dragon"
    },
    {
        value: "electric",
        label: "Electric"
    },
    {
        value: "fairy",
        label: "Fairy"
    },
    {
        value: "fighting",
        label: "Fighting"
    },
    {
        value: "fire",
        label: "Fire"
    },
    {
        value: "flying",
        label: "Flying"
    },
    {
        value: "ghost",
        label: "Ghost"
    },
    {
        value: "grass",
        label: "Grass"
    },
    {
        value: "ground",
        label: "Ground"
    },
    {
        value: "ice",
        label: "Ice"
    },
    {
        value: "normal",
        label: "Normal"
    },
    {
        value: "poison",
        label: "Poison"
    },
    {
        value: "psychic",
        label: "Psychic"
    },
    {
        value: "rock",
        label: "Rock"
    },
    {
        value: "steel",
        label: "Steel"
    },
    {
        value: "water",
        label: "Water"
    }
];

const useStyles = makeStyles({
    formStyle: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    },
    menu: {
        width: 200,
        marginRight: 20,
        background: "#FFF",
        borderRadius: 5
    }
});

const SearchForm = props => {
    const classes = useStyles();

    return (
        <form className={classes.formStyle}>
            <TextField className={classes.menu} label="Filter by name" variant="outlined" value={props.searchName} onChange={props.handleName} />
            <TextField className={classes.menu} select label="Filter by type" variant="outlined" value={props.searchType} onChange={props.handleType}>
                {types.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button variant="contained" onClick={props.handleReset}>Reset</Button>
        </form>
    );
};

export default SearchForm;