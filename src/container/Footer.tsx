import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: "coral",
      padding: theme.spacing(2),
      textAlign: "center",
    },
  });
});

export default function Footer() {
  const classes = styles();
  return (
    <Grid item xs={12} className={classes.footer}>
      Congress wally Footer
    </Grid>
  );
}
