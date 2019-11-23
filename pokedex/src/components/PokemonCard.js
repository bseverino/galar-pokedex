import React from "react";
import clsx from 'clsx';
import { Card, CardContent, CardActions, Collapse, IconButton, Typography, List, ListItem, ListItemText, Divider } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        width: 500,
        margin: 20
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
            <CardContent>
                <Typography variant="h6">#{props.id} {props.name}</Typography>
                <img src={props.src} alt={props.name} />
            </CardContent>
            <CardContent>        
                <CardActions>
                    <p>How to obtain?</p>
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