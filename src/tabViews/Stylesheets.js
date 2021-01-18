import React from "react";

import {
  Container,
  Typography,
  Grid,
  CardContent,
  Card,
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    minHeight: "100vh",
    alignItems: "center",
    display: "flex",
    flex: 1,
  },
  cardStyle: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const cardsValue = [
  {
    id: 1,
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    text:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    text:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function Stylesheets() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          {cardsValue.map((card) => (
            <MuiThemeProvider key={card.id} theme={theme}>
              <Grid
                item
                key={card}
                xs={12}
                sm={cardsValue.length % 2 ? 4 : 6}
                md={cardsValue.length % 2 ? 4 : 3}
              >
                <Card className={classes.cardStyle}>
                  <CardContent className={classes.cardContent}>
                    <Typography>{card.text}</Typography>

                    <Typography variant="body2">
                      This stay at the bottom
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </MuiThemeProvider>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
