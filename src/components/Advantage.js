import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  textContainer: {
    borderRadius: 164.706,
    background: theme.color.green[560],
    minWidth: 95.53,
    padding: 19.765
  },
  text: {
    color: theme.color.green[710],
    leadingTrim: "both",
    textEdge: "cap",
    fontFamily: "Avenir LT Std",
    fontSize: 23.059,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 1
  },
  content: {
    position: "relative",
    background: "red",
    padding: "16px 30px"
  },
  icons: {
    position: "absolute"
  },
  semiCircleRightIcon: {
    composes: "$icons",
    left: 0,
    top: 0
  },
  icon02: {
    composes: "$icons",
    left: 20
  },
  icon03: {
    composes: "$icons",
    right: 20
  },
  icon04: {
    composes: "$icons",
    right: 5,
    top: 40
  },
  circleIcon: {
    composes: "$icons",
    right: 5,
    top: 40
  }
}));

const text = "- 5%";
// const text = '- 5%';
const Advantage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.content}>
        <img
          alt=""
          src="/images/fidelity-semi-circle-right.svg"
          className={classes.semiCircleRightIcon}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.icon02}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.icon03}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.icon04}
        />
        <img
          alt=""
          src="/images/fidelity-circle.svg"
          className={classes.circleIcon}
        />
        {/* <img
          alt=""
          src="/images/fidelity-line.svg"
          className={classes.icon0xxx}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.icon0xxx}
        />
        <img
          alt=""
          src="/images/fidelity-round.svg"
          className={classes.icon0xxx}
        />
        <img
          alt=""
          src="/images/fidelity-semi-circle-left.svg"
          className={classes.icon0xxx}
        />

        <img
          alt=""
          src="/images/fidelity-star.svg"
          className={classes.icon0xxx}
        /> */}
        <div className={classes.textContainer}>
          <span className={classes.text}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
