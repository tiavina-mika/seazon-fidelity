import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  textContainer: {
    borderRadius: 164.706,
    background: theme.color.green[560],
    // minWidth: 95.53,
    // padding: 19.765
    padding: "16px 24px"
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
    // background: "red",
    padding: "24px 34px"
  },
  icons: {
    position: "absolute"
  },
  semiCircleRightIcon: {
    composes: "$icons",
    left: 16,
    top: 2
  },
  point01Icon: {
    composes: "$icons",
    left: 45,
    top: 9
  },
  point02Icon: {
    composes: "$icons",
    right: 44,
    top: 0
  },
  point03Icon: {
    composes: "$icons",
    right: 0,
    top: 36
  },
  circleIcon: {
    composes: "$icons",
    right: 0,
    bottom: 38
  },
  point04Icon: {
    composes: "$icons",
    right: 18,
    bottom: 10
  },
  point04Icon: {
    composes: "$icons",
    right: 18,
    bottom: 10
  },
  semiCircleLeftIcon: {
    composes: "$icons",
    right: 0,
    bottom: 0
  },
  lineIcon: {
    composes: "$icons",
    left: 40,
    bottom: 3
  },
  starIcon: {
    composes: "$icons",
    left: 0,
    bottom: 16
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
          className={classes.point01Icon}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.point02Icon}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.point03Icon}
        />
        <img
          alt=""
          src="/images/fidelity-circle.svg"
          className={classes.circleIcon}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.point04Icon}
        />
        <img
          alt=""
          src="/images/fidelity-semi-circle-left.svg"
          className={classes.semiCircleLeftIcon}
        />
        <img
          alt=""
          src="/images/fidelity-line.svg"
          className={classes.lineIcon}
        />
        <img
          alt=""
          src="/images/fidelity-star.svg"
          className={classes.starIcon}
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
