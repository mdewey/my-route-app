import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useRouteContext } from "../context/useRouteContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    button:{
      width:'25%'
    },
  })
);

const Buttons = () => {
  const classes = useStyles();

  const context = useRouteContext()
  const { dispatch } = context
  

  const clicked = (id:string) =>{
    console.log(id);
    dispatch({type:"MOVED_ADDED", value:id})
  } 

  return (
    <div className={classes.root}>
      <br/>
        <Button variant="outlined" color="primary" onClick={() => clicked('left-hand')} className={classes.button}>Left hand</Button>
        <Button variant="outlined" color="primary" onClick={() => clicked('dyno')} className={classes.button}>Dyno</Button>
        <Button variant="outlined" color="primary" onClick={() => clicked('match-hands')} className={classes.button}>Match hands</Button>
        <Button variant="outlined" color="primary" onClick={() => clicked('right-hand')} className={classes.button}>Right hand</Button>
        <Button variant="outlined" color="primary" onClick={() => clicked('left-foot')} className={classes.button}>Left foot</Button>
        <Button variant="outlined" color="primary" onClick={() => clicked('foot-swap')} className={classes.button}>foot swap</Button>
        <Button variant="outlined" color="primary" onClick={() => clicked('match-feet')} className={classes.button}>Match feet</Button>
        <Button variant="outlined" color="primary" onClick={() => clicked('right-foot')} className={classes.button}>Right foot</Button>
     </div>
  );
};

export default Buttons;
