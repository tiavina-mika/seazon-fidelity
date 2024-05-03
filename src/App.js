import React from "react";
import { createUseStyles } from "react-jss";
import { mobile } from "../../../Responsive";
import SeazonButton from "../../../buttons/SeazonButton";
import Advantage from "./Advantage";

const useStyles = createUseStyles((theme) => ({
  modalRoot: {
    zIndex: 200,
    [mobile]: {
      display: "flex"
    }
  },
  modalContainer: {
    width: 390,
    borderRadius: 10,
    margin: "0 auto",
    [mobile]: {
      width: "100%",
      borderRadius: 0,
      margin: "auto 0 0 0",
      height: "fit-content"
    }
  },
  modalTitle: {
    fontFamily: "Brandon-Medium",
    fontSize: 18,
    lineHeight: "18px",
    color: theme.color.green[710],
    borderBottom: theme.border.grey[575]
  },
  root: {
    padding: [[40, 32, 25, 32]],
    borderRadius: [[0, 0, 10, 20]],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 32,
    [mobile]: {
      borderRadius: 0
    }
  },
  icon: {
    height: 113
  },
  content: {
    fontFamily: "Avenir-Roman",
    fontSize: 14,
    lineHeight: "22px",
    color: theme.color.black
  },
  button: {
    width: "125.64px",
    alignSelf: "center",
    padding: [[0, 20]]
  },
  close: {
    height: 68
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column"
  },
  TUConditions: {
    textAlign: "center",
    fontFamily: "Avenir-Light",
    fontSize: 12,
    lineHeight: "22px",
    color: theme.color.green[710],
    marginTop: "-8px"
  },
  link: {
    textDecoration: "underline",
    fontFamily: "Avenir-Medium",
    cursor: "pointer"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <video
        width={100}
        height={100}
        poster="/pictures/account/loyaltyProgram/thumbanil_moving_meals.png"
        autoPlay
        loop
      >
        <source
          src="/pictures/account/loyaltyProgram/moving_meals.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Advantage />
      </div>
      <div className={classes.content}>
        L'avantage sera appliqué automatiquement sur votre commande du
        25/10/2030.
      </div>
      <div className={classes.content}>Confirmez-vous cet achat ?</div>
      <div className={classes.buttonContainer}>
        <SeazonButton
          color="darkGreen"
          variant="contained"
          text="Confirmer"
          className={classes.button}
        />
        <SeazonButton
          color="transparent"
          variant="contained"
          text="Annuler"
          className={classes.button}
        />
      </div>
      <div className={classes.TUConditions}>
        En confirmant, vous acceptez les{" "}
        <span className={classes.link}>Conditions générales d’utilisation</span>
        du Programme de fidélité Seazon.
      </div>
    </div>
  );
};

export default App;
