import React, { useState } from "react";

import { 
  TextField, 
  Typography, 
  Container, 
  makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  containter: {
    alignItems: 'flex-start', 
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    margin: theme.spacing(1),
    flexDirection: 'column'
  },

  labelStyle: {
    marginLeft: theme.spacing(1),
  }

}));
///////////////////////////////////////////qui verifico se i valori sono delle lettere

const verificaReg = (val) => {

  var my_reg  = /[^a-z]/gi; 
  var is_valid = !(my_reg.test(val))

  return is_valid

}

/////////////////////////////////////////Esercizio 1

export const Esercizio1 = ({input_val}) => {

  return(

    <Typography className={useStyles().labelStyle} variant="body2">
      Esercizio 1: {input_val}
    </Typography>

  )
}

/////////////////////////////////////////Esercizio 2

export const Esercizio2 = ({input_val}) => {
  
  input_val = input_val.replace(/[\W_]+/g, " ") ////qui rimpiazzo i caratteri speciali e i doppi spazzi con uno solo per non perdere il conto delle disparità
  
  const swapped_val = input_val.split(' ').map(
    (sep, limit) => 
    
      limit % 2 ?

        sep.toUpperCase()
       
      :
      
        sep.toLocaleLowerCase()
    
    ).join(' ')
   
  return(
    <Typography className={useStyles().labelStyle} variant="body2">
    Esercizio 2: {swapped_val}
    </Typography>

  )
}

/////////////////////////////////////////Esercizio 3

export const Esercizio3 = ({input_val}) => {

  var shift_val = input_val.split('').map((sep) => {

    var to_str = sep.charCodeAt(0) === 90 ? 65 : sep.charCodeAt(0) + 1 ///qui verifico che se l'ultima lettera è la Z mi ritorna la lettera A
    var val_return = verificaReg(sep) ? String.fromCharCode(to_str) : sep

    return val_return.toLowerCase()

  }).join('') 

  return(
    <Typography className={useStyles().labelStyle} variant="body2">
    Esercizio 3: {shift_val}
    </Typography>

  )
}

/////////////////////////////////////////Esercizio 4

export const Esercizio4 = ({input_val}) => {

  input_val = input_val.replace(/[\W_]+/g, "").toLowerCase()

  let counted_obj =  input_val.split('').reduce((totObj, singleLetter) => {  
      totObj[singleLetter] ? totObj[singleLetter]++ : totObj[singleLetter] = 1;
      return totObj;
  }, {});
  
  return(
    <Typography className={useStyles().labelStyle} variant="body2">
    Esercizio 4: {JSON.stringify(counted_obj)}
    </Typography>

  )
}

////////////////////////////////////////////Esercizio 5

  export const Esercizio5 = ({input_val, obiettivo})=> {

  const is_present = input_val.toLowerCase().includes(obiettivo.toLowerCase())

  return(

    <Typography className={useStyles().labelStyle} variant="body2">
    Esercizio 5 (valore da verificare "{obiettivo}"): {JSON.stringify(is_present)}
    </Typography>

  )

}

export default function Linguaggi(){

  const classes = useStyles();

  const [input_val, setinput_val] = useState('')

  const uppercase = ({target}) => {
    const upper_val = target.value.toUpperCase() 
    setinput_val(upper_val)
  }

  return (

    <React.Fragment>

    <Container className={classes.containter} maxWidth="md" >

      <TextField
          id="outlined-full-width"
          label="Javascript functional"
          style={{ margin: 8 }}
          placeholder="Stringa da elaborare"
          value={input_val.toLowerCase()}
          onChange={uppercase}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <Esercizio1 input_val={input_val}/>
        <Esercizio2 input_val={input_val}/>
        <Esercizio3 input_val={input_val}/>
        <Esercizio4 input_val={input_val}/>
        <Esercizio5 input_val={input_val} obiettivo={'a'}/>  

    </Container>

  </React.Fragment>

  );
}