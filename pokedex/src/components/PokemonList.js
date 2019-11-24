import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import pokemon from "../data/pokemon";
import Background from "../img/styling/rotom.png";
import SearchForm from "./SearchForm";
import PokemonCard from "./PokemonCard";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#E94942",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top",
    minHeight: "100vh",
    padding: 20
  },
  header: {
      color: "white",
      textShadow: "2px 2px 4px #000",
      fontSize: "3rem",
      fontWeight: "bold",
      textAlign: "center",
      margin: 30
  }
});

const PokemonList = () => {
    const classes = useStyles();
    const [searchName, setSearchName] = useState("");
    const [searchType, setSearchType] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = pokemon.filter(item => {
            if (searchType === ""){
                return item.name.toLowerCase().includes(searchName.toLowerCase());
            } else {
                return item.name.toLowerCase().includes(searchName.toLowerCase()) && item.types.includes(searchType);
            };
        });
        setSearchResults(results);
    }, [searchName, searchType]);

    const handleName = event => {
        setSearchName(event.target.value);
    };

    const handleType = event => {
        setSearchType(event.target.value);
    };

    const handleReset = event => {
        setSearchName("");
        setSearchType("");
    };

    function importAll(r) {
        let images = {};
        r.keys().map(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

    return (
        <Container className={classes.container}>
            <Typography className={classes.header} variant="h2">Galar Pokédex Lite</Typography>
            <SearchForm searchName={searchName} searchType={searchType} handleName={handleName} handleType={handleType} handleReset={handleReset} />
            <Grid
                container
                justify="center"
                alignItems="flex-start"
            >
                {searchResults.map(item => (
                        <PokemonCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            src={images[`${item.id}.png`]}
                            types={item.types}
                            classification={item.classification}
                            sword={item.sword}
                            shield={item.shield}
                            obtain={item.obtain}
                        />
                    ))}
            </Grid>
        </Container>
    );
};

export default PokemonList;