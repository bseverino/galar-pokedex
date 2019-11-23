import React from "react";
import { Grid } from "@material-ui/core";

import pokemon from "../data/pokemon";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    function importAll(r) {
        let images = {};
        r.keys().map(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

    return (
        <Grid
            container
            justify="flex-start"
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
    );
};

export default PokemonList;