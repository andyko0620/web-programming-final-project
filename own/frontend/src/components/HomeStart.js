import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import cover from "../images/food_upscaled.png";
import cover2 from "../images/reserve.jpg"
import icon from "../images/icon.png"
const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 60,
    height: "340px",
  },
  safeFood: {
    fontSize: 64,
    fontWeight: 400,
  },
  delivery: {
    color: "#157a21",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
  },
  coverImg: {
    height: "100%",
  },
  iconImg: {
    height: "50%"
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#f7a692",
    marginTop: 30,
  },
}));

const HomeStart = () => {
  const classes = useStyles();
  // const searchInput = useRef()
  // const focusSearchInput = searchInput.current.focus();
  // useEffect( () =>focusSearchInput() )
  return (
    <section className={classes.presentation}>
      <div className={classes.introduction}>
        <Typography className={classes.safeFood} noWrap>
          Safe Food
        </Typography>
        <Typography className={classes.delivery} noWrap>
          Reservation
        </Typography>
        {/* <Typography variant="body2" className={classes.paragraph}>
          No longer wait,reserve now!
        </Typography> */}
        {/* <Typography className={classes.delivery} noWrap>
            No longer wait
            <br></br>
            RESERVE and ORDER NOW
        </Typography> */}
        <img src={icon} alt="icon" className={classes.iconImg} />
      </div>
      <div className={classes.cover}>
        <img src={cover2} alt="safe-delivery" className={classes.coverImg} />
      </div>
    </section>
  );
};

export default React.memo(HomeStart);
