import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    footer: {
      margin: theme.spacing.unit * 2,
      textAlign: "center",
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.footer}>
      Congress wally Footer
    </Grid>
  );
}
