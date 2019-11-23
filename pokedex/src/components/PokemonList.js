import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import pokemon from "../data/pokemon";
import PokemonCard from "./PokemonCard";

const useStyles = makeStyles({
  container: {
    background: "gray",
    padding: 20
  },
  header: {
      color: "white",
      fontSize: "3rem",
      fontWeight: "bold",
      textAlign: "center",
      margin: 30
  }
});

const PokemonList = () => {
    const classes = useStyles();

    function importAll(r) {
        let images = {};
        r.keys().map(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

    return (
        <Container className={classes.container}>
            <Typography className={classes.header} variant="h2">Galar Pokedex Lite</Typography>
            <Grid
                container
                justify="center"
                alignItems="stretch"
            >
                {pokemon.map(item => (
                        <PokemonCard
                            key={Number(item.id)}
                            id={item.id}
                            src={images[`${item.id}.png`]}
                            name={item.name}
                            obtain={item.obtain}
                        />
                    ))}
            </Grid>
        </Container>
    );
};

export default PokemonList;