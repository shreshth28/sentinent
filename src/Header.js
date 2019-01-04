import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "tachyons";
import "./Header.css";

const styles = {
  root: {
    width: "100%",
    maxWidth: 500
  }
};

function Types(props) {
  const { classes } = props;

  return (
    <section class="mw5 mw7-ns center pa5 ph5-ns">
      <div className={classes.root}>
        <Typography className="tc" component="h2" variant="h2" gutterBottom>
          SENTINENT
        </Typography>
        <Typography className="tc" variant="h5" gutterBottom>
          A text sentiment analysis engine
        </Typography>
        <i>
          <Typography className="tc" variant="h6" gutterBottom>
            Under Development
          </Typography>
        </i>
      </div>
    </section>
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Types);
