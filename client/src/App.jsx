import React, { useState } from "react";
import getWeb3 from "./getWeb3";
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
  Box,
  Link,
  IconButton,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import useStyles from "./styles";
import Web3 from "web3";
import GitHubIcon from "@mui/icons-material/GitHub";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {
  const classes = useStyles();

  const [accounts, setAccounts] = useState(null);
  const [web3, setWeb3] = useState(null);

  const componentDidMount = () => {
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);

        // Request account access if needed
        await window.ethereum.enable();
        // Accounts now exposed
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        web3 = window.web3;
        console.log("Injected web3 detected.");

        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
      }
    });
  };
  const componentDidMounta = async () => {
    console.log("omg");
    // try {
    // Get network provider and web3 instance.
    const web3 = await getWeb3();

    // Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();

    setWeb3(web3);
    setAccounts(accounts);
    console.log("in connecting");
    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    // const deployedNetwork = SimpleStorageContract.networks[networkId];
    // const instance = new web3.eth.Contract(
    //   SimpleStorageContract.abi,
    //   deployedNetwork && deployedNetwork.address
    // );

    // Set web3, accounts, and contract to the state, and then proceed with an
    // example of interacting with the contract's methods.
    //this.setState({ web3, accounts, contract: instance }, this.runExample);
    // } catch (error) {
    // Catch any errors for any of the above operations.
    // alert(
    // `Failed to load web3, accounts, or contract. Check console for details.`
    // );
    // console.error(error);
    // }
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar display="flex">
          <Grid justify="space-between" container spacing={24}>
            <Grid item>
              <Typography variant="h6">NFT Collection</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={componentDidMount}
              >
                Connect Metamask
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              NFT Collection
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This is an NFT collection
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GitHubIcon />}
                  >
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/mihaidicianu/nfts"
                    >
                      Github repository
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined "
                    color="primary"
                    startIcon={<DocumentScannerIcon />}
                  >
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://rinkeby.etherscan.io/"
                    >
                      Smart contract
                    </Link>
                  </Button>
                </Grid>
              </Grid>
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
      <footer className={classes.footer} display="flex">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Footer purpose
        </Typography>
        <Grid spacing={2} justifyContent="center">
          <Grid item>
            <IconButton
              aria-label="Linkedin.com"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mihai-dicianu-9a6308188/"
                )
              }
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default App;
