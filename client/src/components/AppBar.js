import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AudioLogo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.AudioLogo}
            color="inherit"
            aria-label="menu"
          >
            <AudiotrackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Audio to MCQ
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
