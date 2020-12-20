import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useRouteContext } from '../context/useRouteContext';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    
    },
    list:{
      display:"flex", 
      flexDirection:'column'
    }
  }),
);

const CurrentRoute = () => {
  const classes = useStyles();

  const context = useRouteContext()
  const { dispatch,  state } = context
  const { currentRoute } = state 

  return (
    <div className={classes.root}>
      <header>Your route: </header>
    <List className={classes.list}>
    <ListItem>
          <ListItemText
            primary={`start`}
          />
        </ListItem>
      {currentRoute.map((move, i) => {
        return <ListItem>
          <ListItemText
            primary={`${i} ${move.moveId}`}
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
