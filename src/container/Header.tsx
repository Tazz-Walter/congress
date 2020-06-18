import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      backgroundColor: "coral",
      padding: theme.spacing(2),
      textAlign: "start",
      color: theme.palette.text.secondary,
    },
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listado">Listado</Link>
            </li>
          </ul>
        </nav>
      </Paper>
    </Grid>
  );
}
