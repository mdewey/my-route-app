import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useRouteContext } from '../context/useRouteContext';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    
    },
    list:{
      display:"flex", 
      flexDirection:'column-reverse'
    },
    removeLastButton:{}
  }),
);

const CurrentRoute = () => {
  const classes = useStyles();

  const context = useRouteContext()
  const { dispatch,  state } = context
  const { currentRoute } = state 

  const clicked = () => {
    dispatch({type:"REMOVE_LAST"})
  }

  return (
    <div className={classes.root}>
      <header>Your route: </header>
      <Button onClick={clicked} className={classes.removeLastButton}>Remove last</Button>
 
    <List className={classes.list}>
    <ListItem>
          <ListItemText
            primary={`start`}
          />
        </ListItem>
      {currentRoute.map((move, i) => {
        return <ListItem key={i}>
          <ListItemText
            primary={`${i+1} ${move.moveId}`}
          />
        </ListItem>
      })
      }
      <ListItem>
          <ListItemText
            primary={`top`}
          />
        </ListItem>
    </List>
  </div>
  );
}

export default CurrentRoute;
