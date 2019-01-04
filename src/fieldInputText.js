import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

var textvalue="";
class FilledTextFields extends React.Component {

  getText(event){
      textvalue=this.refs.myField.getValue();
      console.log(event);
  }

  render() {
    const { classes } = this.props;
    if(this.props.check==1){
        this.getText();
    }

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField ref="myField"
          id="outlined-full-width"
          label="Test Field"
          style={{ margin: 8 }}
          placeholder="Enter whatever comes to your head..."
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilledTextFields);
