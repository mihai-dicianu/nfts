import React from "react";

import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Divider,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import useStyles from "./styles";

import LinkBar from "./components/LinkBar";
import ContactButtons from "./components/ContactButtons";

import MetaMaskAuth from "./components/MetamaskAuth";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {
  const classes = useStyles();
  const addrlog = () => {
    console.log("called log");
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar display="flex">
          <Grid justifyContent="space-between" container spacing={10}>
            <Grid item>
              <ContactButtons />
            </Grid>
            <Grid item>
              <MetaMaskAuth onAddressChanged={addrlog} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary">
              NFT Collection
            </Typography>
            <Divider></Divider>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This is an NFT collection
            </Typography>
            <div className={classes.button}>
              <LinkBar />
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this to describe the
                      content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this to describe the
                    content
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Contact
        </Typography>
        <ContactButtons />
      </footer>
    </>
  );
};

export default App;
