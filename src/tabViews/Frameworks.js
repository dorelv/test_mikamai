import React, { useState, useEffect } from "react";
import { 
  Checkbox, 
  Button, 
  Select, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Box, 
  Container, 
  makeStyles, 
  FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 
  containter: {
    alignItems: 'flex-start', 
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    margin: theme.spacing(1),
    flexDirection: 'column'
  },

  btnDone: {
    backgroundColor: '#607d8b',
    color: '#ffffff',
    marginTop: theme.spacing(1),
  },

  formControl: {
    padding: theme.spacing(1),
  },
  
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
   
  },
  cardContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center', 
  },

}));

///////////////////////////////////oggetto dato

const getData = () => {

  const myCheckList = {
    "id": "list-uuid-1",
    "name": "My list name",
    "items": [
      { "id": "uuid-1", label: "item 1", value: true },
      { "id": "uuid-2", label: "item 2", value: false },
      { "id": "uuid-3", label: "item 3", value: true }
    ]
  }

  return myCheckList

}

///////////////////////////////////render del singolo item

export const SingleItem = ({item, onChange, onClick}) => {

  return(

    <Box>

      <FormControlLabel
      control={<Checkbox checked={item.value} onChange={onChange} disabled={item.verificato}  />}
      label={item.label}
      />

      <Button style={{color: item.verificato ? '#4caf50' : '#f44336'}} onClick={onClick}>
        {item.verificato ? 'Toggle' : 'Done'}
      </Button>

    </Box>   
    
  )
}

///////////////////////////////////render del seleziona/deseleziona tutto

export const ToggleCheck = ({ sel_desel, onChange})=> {

  return(

    <FormControlLabel
    control={<Checkbox checked={sel_desel} onChange={onChange}  />}
    label="Toggle All"
    />

  )

}

///////////////////////////////////filtro

export const FilterList = ({ filter_value , onChange}) => {

  return(

    <FormControl className={useStyles().formControl}>
    <InputLabel component={'span'} id="demo-simple-select-autowidth-label">Filtra</InputLabel>
    <Select
      value={filter_value ? filter_value : 'tutti'}
      onChange={onChange}
      autoWidth
      displayEmpty
    >
      <MenuItem value={'tutti'}>Tutti</MenuItem>
      <MenuItem value={'soloOrig'}>Solo originali</MenuItem>
      <MenuItem value={'nuovi'}>Nuovi</MenuItem>
      <MenuItem value={'selezionati'}>Selezionati</MenuItem>
      <MenuItem value={'nonSel'}>Non selezionati</MenuItem>
      <MenuItem value={'completati'}>Completati</MenuItem>
    </Select>
    </FormControl>
       
  )
}

export default function Frameworks(){

  const classes = useStyles();

  ///////////////////////////dichiaro gli stati
  const [listItems, setListItems] = useState([])
  const [toggleAll, setToggleAll] = useState(false)
  const [filtriAttivi, setFiltriAttivi] = useState(undefined)
  /////////////////////////richiamo le funzioni di react
  useEffect(()=> {
    setListItems(getData().items)
  },[])

  useEffect(()=> {

    const isAllChecked =Object.values(listItems)
    .every(item => item.value === true )

    isAllChecked ? setToggleAll(true): setToggleAll(false)

  },[listItems])

  ////////////////////////////////qui cambio lo stato dell'item checked/not checked
  const setItemChecked = (item) => {

    item.value = !item.value 

    filtriAttivi === 'tutti' || filtriAttivi === 'soloOrig' || filtriAttivi === 'nuovi' ?

      item.filtro = item.value ? 'selezionati' : 'nonSel'

    : 
 
      item.filtro = undefined
    
    setListItems([...listItems])
  }

  ////////////////////////////////qui cambio lo stato dell'oggetto nella lista in verificato
  const setDone = (item) => {
    
    item.verificato === undefined ? item.verificato = true : item.verificato = !item.verificato  
    
    filtriAttivi === 'completati' ?

      item.filtro = item.verificato ? 'completati' : undefined
    :
      item.filtro = item.verificato ? 'completati' : item.value ? 'selezionati' : 'nonSel'  
    
    setListItems([...listItems])
 
  }

  ///////////////////////////////qui setto tutti gli'item selezionati/non selezionati
  const toggleItems = () => {

    listItems.forEach((item) => {
      
      delete item.filtro
      setFiltriAttivi(undefined) //qui setto i filtri su 'tutti' data l'aggiunta di un nuovo item

      item.value = !toggleAll

    })

    setToggleAll(!toggleAll)

  }

  ////////////////////////////////qui aggiuno elementi nella lista
  const aggiungiItem = () => {

    const nuovo_item = { "id": `uuid-${listItems.length + 1}`, label: `item ${listItems.length + 1}`, value: true, filtro: '' }

    filtriAttivi ? nuovo_item.filtro = filtriAttivi : delete nuovo_item.filtro

    setListItems([...listItems, nuovo_item])

  }

  ////////////////////////////////qui gestisco i filtri
  const addFilter = (event) => {
    
    listItems.forEach((item, index)=> {

      delete item.filtro

      switch(event.target.value){

        case 'tutti': { 
          item.filtro = 'tutti'
          break;
        }

        case 'soloOrig': {
          if(index < getData().items.length){
            item.filtro = 'soloOrig'
          }
          break;
        }
        case 'nuovi': {
          if(index >= getData().items.length){
            item.filtro = 'nuovi'
          }
          break;
        }
        case 'selezionati': {
          if(item.value){
            item.filtro = 'selezionati'
          } 
          break;
        }
        case 'nonSel': {
          if(!item.value){
            item.filtro = 'nonSel'
          }
          break;
        }
        case 'completati': {
          if(item.verificato){
            item.filtro = 'completati'
          }
          break;
        }

        default: item.filtro = 'tutti'
        
      }

    })

    setFiltriAttivi(event.target.value)
    setListItems([...listItems])

  }

  ////////////////////////////////qui renderizzo la lista
  const renderItems = (item) => {

    return(

      !filtriAttivi ?

        <SingleItem key={item.id} item={item} onChange={()=> setItemChecked(item)} onClick={()=> setDone(item)}/>

      :

      item.filtro ?
      
        <SingleItem key={item.id} item={item} onChange={()=> setItemChecked(item)} onClick={()=> setDone(item)}/>

      : null
  
    )
  
  }

  return (

    <React.Fragment>

      <Container className={classes.containter} maxWidth="md" >

        <ToggleCheck sel_desel={toggleAll} onChange={toggleItems}/>

        {listItems.map(renderItems)}

        <FilterList filter_value={filtriAttivi} onChange={addFilter}/>

        <Button 
        variant="contained" 
        className={classes.btnDone}
        disabled={filtriAttivi === 'nonSel' || filtriAttivi === 'completati' ? true : false}
        onClick={aggiungiItem}>
          Aggiungi item 
        </Button>

      </Container>

    </React.Fragment>

  );
}



