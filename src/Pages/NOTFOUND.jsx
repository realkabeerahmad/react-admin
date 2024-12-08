import React from "react";
import branding from "../json/branding";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NOTFOUND = ({ showLogo = true }) => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: { xs: "50px 20px", md: "100px" },
      gap: "30px",
    },
    image: {
      maxHeight: "100px",
      // width: "100%",
    },
    button: {
      fontSize: "16px",
      fontWeight: "bold",
      padding: "10px 20px",
    },
  };

  return (
    <Box sx={styles.container}>
      {showLogo ? (
        <img src={branding.logo} alt="404 NOT FOUND" style={styles.image} />
      ) : (
        <></>
      )}
      <Typography variant="h3" color="error" fontWeight="bold">
        404 NOT FOUND
      </Typography>
      <Typography variant="body1" color="text.secondary">
        It seems like you are lost. Please click the button below to get back to
        the home screen.
      </Typography>
      <Button
        variant="contained"
        color="error"
        component={Link}
        to="/"
        sx={styles.button}
      >
        HOME
      </Button>
    </Box>
  );
};

export default NOTFOUND;
