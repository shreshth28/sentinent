import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./mainAppCard.css";
import InputText from "./fieldInputText";
import "tachyons";
import BtnMaterial from "./BtnMaterial";


const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

var check=0;
function SimpleCard(props) {
  const { classes } = props;
return (
    <section class="center margintop">
      <Card className={classes.card}>
        <div>
          <InputText check={check} />
        </div>
        <div className="tc">
            <BtnMaterial/>
        </div>
      </Card>
    </section>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
