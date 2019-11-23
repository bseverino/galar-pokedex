import React from 'react';
import './App.css';
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PokemonList from "./components/PokemonList";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    background: "white"
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth>      
      <PokemonList />
    </Container>
  );
}

export default App;
