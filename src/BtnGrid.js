import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

const images = [
  {
    url:
      "http://www.dailyexcelsior.com/wp-content/uploads/2016/11/happy-smiling-woman-1.jpg",
    title: "HAPPY",
    width: "30%"
  },
  {
    url:
      "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/e4R-RRY/hopeless-crying-teen-girl_blayucbml_thumbnail-full01.png",
    title: "SAD",
    width: "50%"
  },
  {
    url:
      "https://image.shutterstock.com/z/stock-photo-closeup-of-a-crying-boy-studio-shoot-62159218.jpg",
    title: "CRYING",
    width: "20%"
  },
  {
    url:
      "https://images.unsplash.com/photo-1521033642843-98796bf52379?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    title: "FIND YOURS ?",
    width: "100%"
  },
  {
    url: "https://yourbeautifulchild.files.wordpress.com/2012/07/angry-boy.jpg",
    title: "ANGRY",
    width: "40%"
  },
  {
    url:
      "https://www.harbourisp.com.au/wp-content/uploads/2018/02/confused-girl.jpg",
    title: "CONFUSED",
    width: "60%"
  }
];

function ButtonBases(props) {
  const { classes } = props;
  return (
    <div onClick={props.getView} className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonBases);
