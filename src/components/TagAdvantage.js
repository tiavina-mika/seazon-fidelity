import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    height: 99.75,
    position: "relative",
    minWidth: 167.08
  },
  frame: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: 0,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0
  },
  textcontainer: {
    alignItems: "center",
    backgroundColor: theme.color.green[560],
    borderRadius: 164.71,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "19.5px 27px",
    position: "relative",
    marginLeft: -16
  },
  text: {
    color: theme.color.green[710],
    fontFamily: 'Avenir LT Std-85Heavy", Helvetica',
    fontSize: 23.1,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1,
    position: "relative",
    whiteSpace: "nowrap",
    width: "fit-content"
  },
  leftGroup: {
    height: 93.85,
    position: "relative",
    width: 49.4
  },
  rightGroup: {
    height: 99.75,
    marginLeft: -16,
    position: "relative",
    width: 54.15
  },
  ellipse: {
    height: 17,
    left: 15,
    position: "absolute",
    top: 2,
    width: 14
  },
  star: {
    height: 22,
    left: 0,
    position: "absolute",
    top: 61,
    width: 22
  },
  ellipse2: {
    background: theme.color.green[710],
    borderRadius: 2.7,
    height: 5,
    left: 44,
    position: "absolute",
    top: 9,
    width: 5
  },
  line: {
    height: 11,
    left: 39,
    position: "absolute",
    top: 84,
    width: 11
  },
  img: {
    height: 10,
    left: 44,
    position: "absolute",
    top: 90,
    width: 10
  },
  ellipse3: {
    border: "1.29px solid " + theme.color.green[710],
    borderRadius: 8,
    height: 8,
    left: 32,
    position: "absolute",
    top: 59,
    width: 8
  },

  ellipse4: {
    backgroundColor: theme.color.green[710],
    borderRadius: 2.7,
    height: 5,
    left: 36,
    position: "absolute",
    top: 35,
    width: 5
  },

  ellipse5: {
    backgroundColor: theme.color.green[710],
    borderRadius: 2.7,
    height: 5,
    left: 0,
    position: "absolute",
    top: 0,
    width: 5
  },

  ellipse6: {
    backgroundColor: theme.color.green[710],
    borderRadius: 2.7,
    height: 5,
    left: 22,
    position: "absolute",
    top: 88,
    width: 5
  }
}));

const TagAdvantage = ({ tag }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.frame}>
        <div className={classes.leftGroup}>
          <img
            className={classes.ellipse}
            alt="Ellipse"
            src="/images/fidelity-semi-circle-right.svg"
          />
          <img
            className={classes.star}
            alt="Star"
            src="/images/fidelity-star.svg"
          />
          <div className={classes.ellipse2} />
          <img
            className={classes.line}
            alt="Line"
            src="/images/fidelity-line.svg"
          />
        </div>
        <div className={classes.textcontainer}>
          <span className={classes.text}>{tag}</span>
        </div>
        <div className={classes.rightGroup}>
          <img
            className={classes.img}
            alt="Ellipse"
            src="/images/fidelity-semi-circle-left.svg"
          />
          <div className={classes.ellipse3} />
          <div className={classes.ellipse4} />
          <div className={classes.ellipse5} />
          <div className={classes.ellipse6} />
        </div>
      </div>
    </div>
  );
};

export default TagAdvantage;
