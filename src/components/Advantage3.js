import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  content: {
    alignItems: "flex-start",
    // backgroundColor: '#fff',
    display: "flex",
    gap: 10,
    justifyContent: "center",
    position: "relative",
    width: 390
  },
  root: {
    // borderRadius: 164.706,
    // background: theme.color.green[560],
    // // minWidth: 95.53,
    // // padding: 19.765
    // padding: "16px 24px",
    // position: 'relative',

    height: 99.75,
    position: "relative",
    width: 167.08
  },
  frame: {
    alignItems: "center",
    display: "flex",
    left: 0,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0
  },

  group: {
    height: 93.85,
    position: "relative",
    width: 49.4
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
    background: theme.color.green[560],
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

  textcontainer: {
    alignItems: "center",
    backgroundColor: theme.color.green[560],
    borderRadius: 164.71,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // marginLeft: '-16px',
    minWidth: 95.53,
    padding: 19.76,
    position: "relative"
    // miHeight: 40
  },

  textWrapper: {
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

  group2: {
    height: 99.75,
    marginLeft: "-16px",
    position: "relative",
    width: 54.15
  },

  img: {
    height: 10,
    left: 44,
    position: "absolute",
    top: 90,
    width: 10
  },

  ellipse3: {
    border: "1.29px solid",
    borderColor: theme.color.green[710],
    borderRadius: 5.81,
    height: 12,
    left: 32,
    position: "absolute",
    top: 59,
    width: 12
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

const text = "- 5%";
// const text = '- 5%';
const Advantage3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.root}>
        <div className={classes.frame}>
          <div className={classes.group}>
            <img
              className={classes.ellipse}
              alt="Ellipse"
              src="https://c.animaapp.com/zoMYYJZN/img/ellipse-801-1.svg"
            />
            <img
              className={classes.star}
              alt="Star"
              src="https://c.animaapp.com/zoMYYJZN/img/star-1.svg"
            />
            <div className={classes.ellipse2} />
            <img
              className={classes.line}
              alt="Line"
              src="https://c.animaapp.com/zoMYYJZN/img/line-23-1.svg"
            />
          </div>
          <div className={classes.textcontainer}>
            <span className={classes.textWrapper}>-5%</span>
          </div>
          <div className={classes.group2}>
            <img
              className={classes.img}
              alt="Ellipse"
              src="https://c.animaapp.com/zoMYYJZN/img/ellipse-803-1.svg"
            />
            <div cclassName={classes.ellipse3} />
            <div className={classes.ellipse4} />
            <div className={classes.ellipse5} />
            <div className={classes.ellipse6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage3;
