
import React from 'react';
import { 
    makeStyles,
    AppBar,
    Tabs,
    Tab,
    Typography,
    Box
 } from '@material-ui/core';

import Linguaggi from './tabViews/Linguaggi'
import Frameworks from './tabViews/Frameworks'
import Stili from './tabViews/Stili'

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function navProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
}));

export default function Navigation() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style={{backgroundColor: '#34515e'}}
        >
          <LinkTab label="Javascipt funzionale" href="/linguaggi" {...navProps(0)} />
          <LinkTab label="React framework" href="/frameworks" {...navProps(1)} />
          <LinkTab label="Markup and Stylesheets" href="/stili" {...navProps(2)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Linguaggi />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Frameworks />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stili />
      </TabPanel>
    </div>
  );
}
