import React from "react";
import clsx from 'clsx';
import { Card, CardContent, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Divider } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

import PokemonType from "./PokemonType";

const useStyles = makeStyles(theme => ({
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        width: 500,
        margin: 20
    },
    cardLeft: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 160,
        marginTop: -5
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    version: {
        display: "flex",
        alignItems: "flex-end"
    },
    yes: {
        color: "green",
        margin: "0 10px 0 5px"
    },
    no: {
        color: "red",
        margin: "0 10px 0 5px"
    }
  }));

const PokemonCard = props => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardLeft}>
                <Typography variant="h6">#{props.id} {props.name}</Typography>
                <PokemonType {...props} />
                <img src={props.src} alt={props.name} />                
            </CardContent>
            <CardContent>
                <Typography variant="button">The {props.classification} Pokemon</Typography>
                <Typography className={classes.version} variant="subtitle2">
                    Sword? {props.sword === true ? <CheckIcon className={classes.yes} /> : <CloseIcon className={classes.no} />} Shield? {props.shield === true ? <CheckIcon className={classes.yes} /> : <CloseIcon className={classes.no} />}
                </Typography>
                <CardActions>                
                    <Typography variant="body2">Methods to obtain</Typography>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List>
                        {props.obtain.map((item, index) => (
                            <>
                            <Divider />
                            <ListItem key={index}>
                                <ListItemText primary={item} />                                
                            </ListItem>                            
                            </>
                        ))}
                    </List>
                </Collapse>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;