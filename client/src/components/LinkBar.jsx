import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

import { Grid, Link } from "@material-ui/core";
import Button from "@mui/material/Button";

const LinkBar = () => {
  const jsonData = require('../contracts/Nfts.json'); 
  const scAddress = jsonData.networks[4].address;
   
  console.log(jsonData);
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Button variant="contained" color="primary" startIcon={<GitHubIcon />}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mihaidicianu/nfts"
            style={{ color: "#FFF" }}
          >
            Github repository
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DocumentScannerIcon />}
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://rinkeby.etherscan.io/address/" + scAddress}
            style={{ color: "#FFF" }}
          >
            Smart contract
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default LinkBar;
