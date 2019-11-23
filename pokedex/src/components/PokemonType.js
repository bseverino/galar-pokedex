import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Bug from "../img/type/bug.gif";
import Dark from "../img/type/dark.gif";
import Dragon from "../img/type/dragon.gif";
import Electric from "../img/type/electric.gif";
import Fairy from "../img/type/fairy.gif";
import Fighting from "../img/type/fighting.gif";
import Fire from "../img/type/fire.gif";
import Flying from "../img/type/flying.gif";
import Ghost from "../img/type/ghost.gif";
import Grass from "../img/type/grass.gif";
import Ground from "../img/type/ground.gif";
import Ice from "../img/type/ice.gif";
import Normal from "../img/type/normal.gif";
import Poison from "../img/type/poison.gif";
import Psychic from "../img/type/psychic.gif";
import Rock from "../img/type/rock.gif";
import Steel from "../img/type/steel.gif";
import Water from "../img/type/water.gif";

const useStyles = makeStyles({
    types: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 10
    }
  });

const PokemonType = props => {
    const classes = useStyles();

    return (
        <div className={classes.types}>
            {props.types.map((item, index) => {
                if (item === "bug") {
                    return <img key={index} src={Bug} alt="Bug type" />
                } else if (item === "dark") {
                    return <img key={index}  src={Dark} alt="Dark type" />
                } else if (item === "dragon") {
                    return <img key={index}  src={Dragon} alt="Dragon type" />
                } else if (item === "electric") {
                    return <img key={index}  src={Electric} alt="Electric type" />
                } else if (item === "fairy") {
                    return <img key={index}  src={Fairy} alt="Fairy type" />
                } else if (item === "fighting") {
                    return <img key={index} src={Fighting} alt="Fighting type" />
                } else if (item === "fire") {
                    return <img key={index} src={Fire} alt="Fire type" />
                } else if (item === "flying") {
                    return <img key={index} src={Flying} alt="Flying type" />
                } else if (item === "ghost") {
                    return <img key={index} src={Ghost} alt="Ghost type" />
                } else if (item === "grass") {
                    return <img key={index} src={Grass} alt="Grass type" />
                } else if (item === "ground") {
                    return <img key={index} src={Ground} alt="Ground type" />
                } else if (item === "ice") {
                    return <img key={index} src={Ice} alt="Ice type" />
                } else if (item === "normal") {
                    return <img key={index} src={Normal} alt="Normal type" />
                } else if (item === "poison") {
                    return <img key={index} src={Poison} alt="Poison type" />
                } else if (item === "psychic") {
                    return <img key={index} src={Psychic} alt="Psychic type" />
                } else if (item === "rock") {
                    return <img key={index} src={Rock} alt="Rock type" />
                } else if (item === "steel") {
                    return <img key={index} src={Steel} alt="Steel type" />
                } else if (item === "water") {
                    return <img key={index} src={Water} alt="Water type" />
                }
            })}
        </div>
    );
};

export default PokemonType;