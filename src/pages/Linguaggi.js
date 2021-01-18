import React, { useState, memo } from "react";
import "../cssStyles/Linguaggi.css";

import { TextField, Typography, Container, makeStyles } from '@material-ui/core';

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

export const Esercizio1 = memo(({input_val}) => {

  return(

    <Typography className={useStyles().labelStyle} variant="body2">
      Esercizio 1: {input_val}
    </Typography>

    //<label>Esercizio 1: {input_val}</label>

  )
})

/////////////////////////////////////////Esercizio 2

export const Esercizio2 = memo(({input_val}) => {

  const swapped_val = input_val.split(' ').map(
    (sep,limit) => 
      limit % 2 === 0 ?
        sep.toUpperCase()
      : 
        sep.toLocaleLowerCase()).join(' ')

  return(
    <Typography className={useStyles().labelStyle} variant="body2">
    Esercizio 2: {swapped_val}
    </Typography>

    //<label>Esercizio 2: {swapped_val}</label>

  )
})

/////////////////////////////////////////Esercizio 3

export const Esercizio3 = memo(({input_val}) => {

  var shift_val = input_val.split('').map((sep) => {

    var to_str = sep.charCodeAt(0) === 90 ? 65 : sep.charCodeAt(0) + 1 ///qui verifico che se l'ultima lettera è la Z mi ritorna la lettera A
    var val_return = verificaReg(sep) ? String.fromCharCode(to_str) : sep

    return val_return.toLowerCase()

  }).join('') 

  return(
    <Typography className={useStyles().labelStyle} variant="body2">
    Esercizio 3: {shift_val}
    </Typography>

    //<label>Esercizio 3: {shift_val}</label>

  )
})

/////////////////////////////////////////Esercizio 4

export const Esercizio4 = memo(({input_val}) => {

  var counted_obj = {}

  input_val.split('').map((sep, limit) => {

    if (verificaReg(sep)) {
      const count_obj = {[sep.toLowerCase()] : limit}
      Object.assign(counted_obj, count_obj)
    }

    return counted_obj
  
  })

  return(
    <Typography className={useStyles().labelStyle} variant="body2">
    Esercizio 4: {JSON.stringify(counted_obj)}
    </Typography>

    //<label>Esercizio 4: {JSON.stringify(counted_obj)}</label>

  )
})

////////////////////////////////////////////Esercizio 5

  export const Esercizio5 = memo(({input_val, obiettivo})=> {

  const is_present = input_val.toLowerCase().includes(obiettivo.toLowerCase())

  return(

    <Typography className={useStyles().labelStyle} variant="body2">
    Esercizio 5 (valore da verificare "{obiettivo}"): {JSON.stringify(is_present)}
    </Typography>

    //<label>Esercizio 4: {JSON.stringify(counted_obj)}</label>

  )

   

})

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
          label="Scrivi qualcosa"
          style={{ margin: 8 }}
          placeholder="Placeholder"
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

    /*<div className="Javascript">
      <form className="form">
        <input className="input" value={input_val.toLowerCase()} onChange={uppercase}/>
        <Esercizio1 input_val={input_val}/>
        <Esercizio2 input_val={input_val}/>
        <Esercizio3 input_val={input_val}/>
        <Esercizio4 input_val={input_val}/>
        <Esercizio5 input_val={input_val} obiettivo={'a'} />  
      </form>
    </div>*/
  );
}