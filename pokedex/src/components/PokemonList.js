import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import pokemon from "../data/pokemon";
import PokemonCard from "./PokemonCard";
import Background from "../img/styling/rotom.png";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#E94942",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    backgroundAttachment: "fixed",
    backgroundPosition: "center top",
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
                alignItems="flex-start"
            >
                {pokemon.map(item => (
                        <PokemonCard
                            key={Number(item.id)}
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