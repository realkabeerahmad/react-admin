import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const LOGIN = () => {
  const { setLogin, setAlert, setSeverity, setOpenAlert } =
    useContext(AppContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: {
      value: "",
      error: false,
      helperText: "",
    },
    password: {
      value: "",
      error: false,
      helperText: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        value: value,
        error: false, // Reset error on change
        helperText: "", // Clear helper text on change
      },
    }));
  };

  const handleLogin = () => {
    const { email, password } = values;

    // Simple validation
    if (!email.value) {
      setValues((prev) => ({
        ...prev,
        email: { ...prev.email, error: true, helperText: "Email is required" },
      }));
      return;
    }

    if (!password.value) {
      setValues((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          error: true,
          helperText: "Password is required",
        },
      }));
      return;
    }

    // Successful login
    setAlert("Login Success");
    setSeverity("success");
    setLogin(true);
    setOpenAlert(true);
    navigate("/");
  };

  return (
    <Box sx={{ ...styles.container }}>
      <Typography variant="h4">LOGIN</Typography>
      <TextField
        name="email"
        id="email"
        label="EMAIL"
        type="email"
        variant="standard"
        color="error"
        onChange={handleChange}
        value={values.email.value}
        helperText={values.email.helperText}
        error={values.email.error}
        required
        autoComplete="email"
      />
      <TextField
        name="password"
        id="password"
        label="PASSWORD"
        type="password"
        variant="standard"
        color="error"
        onChange={handleChange}
        value={values.password.value}
        helperText={values.password.helperText}
        error={values.password.error}
        required
        autoComplete="current-password"
      />
      <Button
        onClick={handleLogin}
        variant="contained"
        color="error"
        sx={styles.button}
      >
        LOGIN
      </Button>
      <Divider />
      <Typography>
        Don't have an account?{" "}
        <Link to="/register" style={styles.link}>
          Register
        </Link>
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "20px",
    maxWidth: 400,
    margin: "auto",
    padding: "30px",
    border: "1px solid #dfdfdf",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    marginTop: "50px",
    marginBottom: "50px",
  },
  button: {
    padding: "10px 0",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#d32f2f",
    },
  },
  link: {
    color: "#d32f2f",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default LOGIN;
