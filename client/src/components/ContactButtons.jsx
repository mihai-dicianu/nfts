import React from "react";

import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ContactButtons = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <IconButton
          aria-label="Linkedin.com"
          onClick={() =>
            window.open("https://www.linkedin.com/in/mihai-dicianu-9a6308188/")
          }
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          // aria-label="Linkedin.com"
          onClick={() =>
            window.open(
              "mailto:mihaidicianu@gmail.com?subject=Cool%20site,%20let's%20talk!"
            )
          }
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ContactButtons;
