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
    position: "relative"
  },
  icon00: {
    position: "absolute"
  }
}));

const Advantage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.content}>
        <img alt="" src="/images/fidelity-01.svg" className={classes.icon00} />
        <img
          alt=""
          src="/images/fidelity-line.svg"
          className={classes.icon01}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.icon01}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.icon01}
        />
        <img
          alt=""
          src="/images/fidelity-point-01.svg"
          className={classes.icon01}
        />
        <img
          alt=""
          src="/images/fidelity-round.svg"
          className={classes.icon01}
        />
        <img
          alt=""
          src="/images/fidelity-semi-circle-left.svg"
          className={classes.icon01}
        />
        <img
          alt=""
          src="/images/fidelity-semi-circle-right.svg"
          className={classes.icon01}
        />
        <img
          alt=""
          src="/images/fidelity-star.svg"
          className={classes.icon01}
        />
        <div className={classes.textContainer}>
          <span className={classes.text}>- 5%</span>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
