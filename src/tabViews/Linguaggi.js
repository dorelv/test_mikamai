import React, { useState } from "react";

import {
  TextField,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    alignItems: "flex-start",
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  labelStyle: {
    marginLeft: theme.spacing(1),
  },
}));
///////////////////////////////////////////qui verifico se i valori sono delle lettere

const regexControl = (val) => {
  var myReg = /[^a-z]/gi;
  var isValid = !myReg.test(val);

  return isValid;
};

/////////////////////////////////////////Esercizio 1

const Esercizio1 = ({ inputVal }) => {
  var upperVal = inputVal
    .split("")
    .map((sep) => {
      return sep.toUpperCase();
    })
    .join("");

  return (
    <Typography className={useStyles().labelStyle} variant="body2">
      Esercizio 1: {upperVal}
    </Typography>
  );
};

/////////////////////////////////////////Esercizio 2

const Esercizio2 = ({ inputVal }) => {
  inputVal = inputVal.replace(/[\W_]+/g, " "); ////qui rimpiazzo i caratteri speciali e i doppi spazzi con uno solo per non perdere il conto delle disparità

  const swappVal = inputVal
    .split(" ")
    .map((sep, limit) =>
      limit % 2 ? sep.toUpperCase() : sep.toLocaleLowerCase()
    )
    .join(" ");

  return (
    <Typography className={useStyles().labelStyle} variant="body2">
      Esercizio 2: {swappVal}
    </Typography>
  );
};

/////////////////////////////////////////Esercizio 3

const Esercizio3 = ({ inputVal }) => {
  var shiftVal = inputVal
    .split("")
    .map((sep) => {
      var toStr = sep.charCodeAt(0) === 90 ? 65 : sep.charCodeAt(0) + 1;
      var returnValue = regexControl(sep) ? String.fromCharCode(toStr) : sep;

      return returnValue.toLowerCase();
    })
    .join("");

  return (
    <Typography className={useStyles().labelStyle} variant="body2">
      Esercizio 3: {shiftVal}
    </Typography>
  );
};

/////////////////////////////////////////Esercizio 4

const Esercizio4 = ({ inputVal }) => {
  inputVal = inputVal.replace(/[\W_]+/g, "").toLowerCase();

  let countedObj = inputVal.split("").reduce((totObj, singleLetter) => {
    totObj[singleLetter] ? totObj[singleLetter]++ : (totObj[singleLetter] = 1);
    return totObj;
  }, {});

  return (
    <Typography className={useStyles().labelStyle} variant="body2">
      Esercizio 4: {JSON.stringify(countedObj)}
    </Typography>
  );
};

////////////////////////////////////////////Esercizio 5

const Esercizio5 = ({ inputVal, goalVal }) => {
  const isInside = inputVal.toLowerCase().includes(goalVal.toLowerCase());

  return (
    <Typography className={useStyles().labelStyle} variant="body2">
      Esercizio 5 (valore da verificare "{goalVal}"): {JSON.stringify(isInside)}
    </Typography>
  );
};

export default function Linguaggi() {
  const classes = useStyles();
  const [inputVal, setInputVal] = useState("");

  return (
    <React.Fragment>
      <Container className={classes.flexContainer} maxWidth="md">
        <TextField
          id="outlined-full-width"
          label="Javascript functional"
          placeholder="Stringa da elaborare"
          value={inputVal.toLowerCase()}
          onChange={({ target }) => setInputVal(target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <Esercizio1 inputVal={inputVal} />
        <Esercizio2 inputVal={inputVal} />
        <Esercizio3 inputVal={inputVal} />
        <Esercizio4 inputVal={inputVal} />
        <Esercizio5 inputVal={inputVal} goalVal={"a"} />
      </Container>
    </React.Fragment>
  );
}
