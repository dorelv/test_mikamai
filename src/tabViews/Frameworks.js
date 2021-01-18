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
  FormControlLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    alignItems: "flex-start",
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  btnDone: {
    backgroundColor: "#607d8b",
    color: "#ffffff",
    marginTop: theme.spacing(1),
  },
  formControl: {
    padding: theme.spacing(1),
  },
}));

///////////////////////////////////

const getData = () => {
  const myCheckList = {
    id: "list-uuid-1",
    name: "My list name",
    items: [
      { id: "uuid-1", label: "item 1", value: true },
      { id: "uuid-2", label: "item 2", value: false },
      { id: "uuid-3", label: "item 3", value: true },
    ],
  };

  return myCheckList;
};

///////////////////////////////////

const SingleItem = ({ item, onChange, onClick }) => {
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={item.value}
            onChange={onChange}
            disabled={item.done}
          />
        }
        label={item.label}
      />

      <Button
        style={{ color: item.done ? "#4caf50" : "#f44336" }}
        onClick={onClick}
      >
        {item.done ? "Toggle" : "Done"}
      </Button>
    </Box>
  );
};

///////////////////////////////////

const ToggleCheck = ({ toggledOn, onChange }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={toggledOn} onChange={onChange} />}
      label="Toggle All"
    />
  );
};

///////////////////////////////////filter

const FilterList = ({ filterVal, onChange }) => {
  return (
    <FormControl className={useStyles().formControl}>
      <InputLabel component={"span"} id="demo-simple-select-autowidth-label">
        Filtra
      </InputLabel>
      <Select
        value={filterVal ? filterVal : "tutti"}
        onChange={onChange}
        autoWidth
        displayEmpty
      >
        <MenuItem value={"tutti"}>Tutti</MenuItem>
        <MenuItem value={"originali"}>Solo originali</MenuItem>
        <MenuItem value={"nuovi"}>Nuovi</MenuItem>
        <MenuItem value={"selezionati"}>Selezionati</MenuItem>
        <MenuItem value={"nonSelezionati"}>Non selezionati</MenuItem>
        <MenuItem value={"completati"}>Completati</MenuItem>
      </Select>
    </FormControl>
  );
};

export default function Frameworks() {
  const classes = useStyles();

  ///////////////////////////
  const [listItems, setListItems] = useState([]);
  const [toggleAll, setToggleAll] = useState(false);
  const [filtriAttivi, setFiltriAttivi] = useState(undefined);
  /////////////////////////r
  useEffect(() => {
    setListItems(getData().items);
  }, []);

  useEffect(() => {
    const isAllChecked = Object.values(listItems).every(
      (item) => item.value === true
    );

    isAllChecked ? setToggleAll(true) : setToggleAll(false);
  }, [listItems]);

  ////////////////////////////////
  const setItemChecked = (item) => {
    item.value = !item.value;

    filtriAttivi === "tutti" ||
    filtriAttivi === "originali" ||
    filtriAttivi === "nuovi"
      ? (item.filter = item.value ? "selezionati" : "nonSelezionati")
      : (item.filter = undefined);

    setListItems([...listItems]);
  };

  ////////////////////////////////
  const setDone = (item) => {
    item.done === undefined ? (item.done = true) : (item.done = !item.done);

    filtriAttivi === "completati"
      ? (item.filter = item.done ? "completati" : undefined)
      : (item.filter = item.done
          ? "completati"
          : item.value
          ? "selezionati"
          : "nonSelezionati");

    setListItems([...listItems]);
  };

  ///////////////////////////////
  const toggleItems = () => {
    listItems.forEach((item) => {
      delete item.filter;
      setFiltriAttivi(undefined);

      item.value = !toggleAll;
    });

    setToggleAll(!toggleAll);
  };

  ////////////////////////////////
  const aggiungiItem = () => {
    const nuovoItem = {
      id: `uuid-${listItems.length + 1}`,
      label: `item ${listItems.length + 1}`,
      value: true,
      filter: "",
    };

    filtriAttivi
      ? filtriAttivi === "nonSelezionati" || filtriAttivi === "completati"
        ? setFiltriAttivi(undefined)
        : (nuovoItem.filter = filtriAttivi)
      : delete nuovoItem.filter;

    setListItems([...listItems, nuovoItem]);
  };

  ////////////////////////////////qui gestisco i filtri
  const addFilter = (event) => {
    listItems.forEach((item, index) => {
      delete item.filter;

      switch (event.target.value) {
        case "tutti": {
          item.filter = "tutti";
          break;
        }

        case "originali": {
          if (index < getData().items.length) {
            item.filter = "originali";
          }
          break;
        }
        case "nuovi": {
          if (index >= getData().items.length) {
            item.filter = "nuovi";
          }
          break;
        }
        case "selezionati": {
          if (item.value) {
            item.filter = "selezionati";
          }
          break;
        }
        case "nonSelezionati": {
          if (!item.value) {
            item.filter = "nonSelezionati";
          }
          break;
        }
        case "completati": {
          if (item.done) {
            item.filter = "completati";
          }
          break;
        }

        default:
          item.filter = "tutti";
      }
    });

    setFiltriAttivi(event.target.value);
    setListItems([...listItems]);
  };

  ////////////////////////////////qui renderizzo la lista
  const renderItems = (item) => {
    return !filtriAttivi ? (
      <SingleItem
        key={item.id}
        item={item}
        onChange={() => setItemChecked(item)}
        onClick={() => setDone(item)}
      />
    ) : item.filter ? (
      <SingleItem
        key={item.id}
        item={item}
        onChange={() => setItemChecked(item)}
        onClick={() => setDone(item)}
      />
    ) : null;
  };

  return (
    <React.Fragment>
      <Container className={classes.flexContainer} maxWidth="md">
        <ToggleCheck toggledOn={toggleAll} onChange={toggleItems} />

        {listItems.map(renderItems)}

        <FilterList filterVal={filtriAttivi} onChange={addFilter} />

        <Button
          variant="contained"
          className={classes.btnDone}
          onClick={aggiungiItem}
        >
          Aggiungi item
        </Button>
      </Container>
    </React.Fragment>
  );
}
