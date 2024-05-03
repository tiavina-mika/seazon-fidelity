import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import { isFoodcheriService, toOneText } from "./utils/utils";

const useStyles = createUseStyles((theme) => ({
  container: {
    composes: "flexRow center",
    fontFamily: ({ service }) =>
      isFoodcheriService(service) ? "RocGrotesk-Medium" : "Avenir-Black",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    height: 50,
    borderRadius: 25,
    outline: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    letterSpacing: ({ service }) => isFoodcheriService(service) && "0.8px" // TODO: check impack seazon
  },
  withText: {
    padding: ({ service }) =>
      isFoodcheriService(service) ? "0 30px" : "0 40px"
  },
  greenBtn: {
    backgroundColor: theme.color.green[600],
    color: theme.color.white,
    border: "none",
    "&:hover": {
      backgroundColor: theme.color.green[610]
    },
    "&:focus, &:active:focus": {
      backgroundColor: theme.color.green[620]
    },
    "&:active": {
      backgroundColor: theme.color.green[600]
    },
    "&:disabled, &:disabled:hover": {
      backgroundColor: theme.color.green[600],
      opacity: 0.7,
      cursor: "not-allowed"
    }
  },
  greenBtnLoading: {
    backgroundColor: theme.color.rgba[120]
  },
  redBtn: {
    backgroundColor: theme.color.red[600],
    color: "#fff",
    border: "none",
    "&:hover": {
      backgroundColor: theme.color.red[610]
    },
    "&:focus, &:active:focus": {
      backgroundColor: theme.color.red[610]
    },
    "&:active": {
      backgroundColor: theme.color.red[610]
    },
    "&:disabled, &:disabled:hover": {
      backgroundColor: theme.color.orange[700],
      opacity: 0.7,
      cursor: "not-allowed"
    }
  },
  redBtnLoading: {
    backgroundColor: theme.color.rgba[110]
  },
  greyNoShadow: {
    border: theme.border.grey[600],
    backgroundColor: theme.color.transparent,
    padding: ({ service }) =>
      isFoodcheriService(service) ? "0 30px" : "0 22px",
    color: theme.color.grey[640],
    "&:hover": {
      borderColor: theme.color.grey[630]
    },
    "&:focus, &:active:focus": {
      borderColor: theme.color.grey[630]
    },
    "&:active": {
      borderColor: theme.color.grey[630]
    },
    "&:disabled, &:disabled:hover": {
      borderColor: theme.color.grey[610],
      cursor: "not-allowed"
    }
  },
  greyBtn: {
    composes: "$greyNoShadow",
    boxShadow: theme.boxShadow[120]
  },
  greyBtnLoading: {
    //composes: 'greyBorder',
    border: theme.border.grey[600],
    backgroundColor: theme.background.rgba[100]
  },
  whiteNoShadow: {
    composes: "$greyNoShadow",
    backgroundColor: theme.background.white
  },
  whiteBtn: {
    composes: "$greyBtn",
    backgroundColor: theme.background.white
  },
  whiteBtnLoading: {
    composes: "$greyBtnLoading"
  },
  transparentBtn: {
    border: theme.border.transparent,
    backgroundColor: theme.background.transparent,
    color: ({ service }) =>
      isFoodcheriService(service) ? theme.color.black : theme.color.green[710]
  },
  transparentBtnLoading: {
    composes: "$greyBtnLoading"
  },
  blackInWhite: {
    composes: "$whiteBtn",
    boxShadow: "none",
    color: theme.color.grey[650]
  },
  whiteInBlackBtnLoading: {
    composes: "$whiteBtn",
    backgroundColor: theme.color.black,
    boxShadow: "none",
    color: theme.color.white,
    cursor: "not-allowed"
  },
  whiteInBlackBtnDisabled: {
    composes: "$whiteBtn",
    backgroundColor: theme.background.grey[634],
    boxShadow: "none",
    color: "#7C7C7C",
    cursor: "not-allowed"
  },
  whiteInBlackBtnDisabledControlTerminal: {
    composes: "$whiteBtn",
    backgroundColor: theme.background.grey[634],
    boxShadow: "none",
    color: theme.color.grey[634],
    opacity: 1,
    cursor: "not-allowed"
  },
  whiteInBlack: {
    composes: "$whiteBtn",
    backgroundColor: theme.color.black,
    boxShadow: "none",
    color: theme.color.white
  },
  contained: {
    border: "none",
    borderRadius: 0,
    fontFamily: ({ service }) =>
      isFoodcheriService(service) ? "RocGrotesk-Medium" : "Brandon-Bold",
    fontSize: 14,
    letterSpacing: 0.3,
    textTransform: "uppercase"
  },
  yellowBtn: {
    backgroundColor: theme.background.yellow[584],
    color: theme.color.green[710],
    "&:hover": {
      backgroundColor: theme.background.yellow[586]
    }
  },
  yellowBtnLoading: {
    backgroundColor: theme.background.yellow[584],
    cursor: "not-allowed"
  },
  yellowBtnDisabled: {
    composes: "$yellowBtn",
    opacity: 0.5,
    cursor: "not-allowed"
  },
  darkGreenBtn: {
    backgroundColor: theme.background.green[710],
    color: theme.color.white,
    "&:hover": {
      backgroundColor: theme.background.green[705]
    }
  },
  darkGreenBtnLoading: {
    backgroundColor: theme.background.green[710]
  },
  darkGreenBtnDisabled: {
    composes: "$darkGreenBtn",
    opacity: 0.5,
    cursor: "not-allowed !important"
  },
  blueBtn: {
    backgroundColor: theme.background.blue[560],
    color: theme.color.white,
    "&:hover": {
      backgroundColor: theme.background.blue[569]
    }
  },
  purpleBtn: {
    backgroundColor: theme.background.blue[640],
    color: theme.color.white,
    "&:hover": {
      backgroundColor: theme.background.blue[620]
    }
  },
  purpleBtnLoading: {
    backgroundColor: theme.background.blue[620],
    cursor: "not-allowed"
  },
  blueBtnLoading: {
    backgroundColor: theme.background.blue[620],
    cursor: "not-allowed"
  },
  blackBtn: {
    backgroundColor: theme.background.black,
    color: theme.color.white,
    "&:hover": {
      opacity: 0.7
    }
  },
  blackBtnDisabled: {
    backgroundColor: theme.background.grey[960],
    color: theme.color.white,
    cursor: "not-allowed"
  },
  blackBtnLoading: {
    backgroundColor: theme.background.black,
    cursor: "not-allowed"
  },
  centerIcon: {
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const SeazonButton = (props) => {
  const {
    className,
    textClassName,
    service = "subscription",
    color = "darkGreen",
    text,
    icon,
    onClick,
    variant,
    forceText = false,
    loading = false,
    disabled = false,
    iconPosition = "left",
    btnRef,
    iconClassName,
    ...otherProps
  } = props;

  const classes = useStyles({ service });

  let buttonClass;
  let loaderColor = "#fff";
  //-----------------------------------------//
  //-------------- BY COLOR -----------------//
  //-----------------------------------------//
  switch (color) {
    case "green":
      buttonClass = classes.greenBtn;
      if (loading) {
        buttonClass = classes.greenBtnLoading;
      }
      break;
    case "red":
      buttonClass = classes.redBtn;
      if (loading) {
        buttonClass = classes.redBtnLoading;
      }
      break;
    case "grey":
      buttonClass = classes.greyBtn;
      if (loading) {
        buttonClass = classes.greyBtnLoading;
        loaderColor = "#9E9E9E";
      }
      break;
    case "greyNoShadow":
      buttonClass = classes.greyNoShadow;
      if (loading) {
        buttonClass = classes.greyBtnLoading;
        loaderColor = "#9E9E9E";
      }
      break;
    case "whiteInBlack": {
      buttonClass = classes.whiteInBlack;
      if (loading) {
        buttonClass = classes.whiteInBlackBtnLoading;
      }
      if (disabled) {
        if (props.fromControlTerminal) {
          buttonClass = classes.whiteInBlackBtnDisabledControlTerminal;
        } else {
          buttonClass = classes.whiteInBlackBtnDisabled;
        }
      }
      break;
    }
    case "white":
    case "blackInWhite":
      buttonClass = color === "white" ? classes.whiteBtn : classes.blackInWhite;
      if (loading) {
        buttonClass = classes.whiteBtnLoading;
        loaderColor = "#9E9E9E";
      }
      break;
    case "transparent":
      buttonClass = loading ? classes.greenBtnLoading : classes.transparentBtn;
      if (loading) {
        buttonClass = classes.transparentBtnLoading;
        loaderColor = "#9E9E9E";
      }
      break;
    case "yellow":
      buttonClass = classes.yellowBtn;
      if (loading) {
        buttonClass = classes.yellowBtnLoading;
      }
      if (disabled) {
        buttonClass = classes.yellowBtnDisabled;
      }
      break;
    case "darkGreen":
      buttonClass = classes.darkGreenBtn;
      if (loading) {
        buttonClass = classes.darkGreenBtnLoading;
      }
      if (disabled) {
        buttonClass = classes.darkGreenBtnDisabled;
      }
      break;
    case "blue":
      buttonClass = classes.blueBtn;
      if (loading) {
        buttonClass = classes.blueBtnLoading;
      }
      break;
    case "purple":
      buttonClass = classes.purpleBtn;
      if (loading) {
        buttonClass = classes.purpleBtnLoading;
      }
      break;
    case "black":
      buttonClass = classes.blackBtn;
      if (disabled) {
        buttonClass = classes.blackBtnDisabled;
      } else if (loading) {
        buttonClass = classes.blackBtnLoading;
      }
      break;
    default:
      break;
  }

  //-----------------------------------------//
  //-------------- BY VARIANT ---------------//
  //-----------------------------------------//
  switch (variant) {
    case "rounded":
      break;
    case "contained":
      buttonClass = classNames(buttonClass, classes.contained);
      break;
    default:
      break;
  }

  return (
    <div
      id={toOneText(text)}
      onClick={disabled || loading ? null : onClick}
      className={classNames(classes.container, buttonClass, className, {
        [classes.withText]: !!text
      })}
      ref={btnRef}
      {...otherProps}
    >
      {!loading && iconPosition === "left" && icon}
      {(!loading || forceText) && text && (
        <span className={textClassName}>{text}</span>
      )}
      {!loading && !text && iconPosition === "center" && icon}
      {!loading && iconPosition === "right" && icon}

      {loading && <>...loading</>}
    </div>
  );
};

SeazonButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.any,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(["left", "right", "center"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  textClassName: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(["rounded", "contained", "noBorder"])
};

export default SeazonButton;
