import { Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const LOGOUT = () => {
  const { setLogin, setAlert, setSeverity, setOpenAlert } =
    useContext(AppContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    setAlert("Logout Success");
    setSeverity("error");
    setLogin(false);
    setOpenAlert(true);
    navigate("/login");
  };
  return (
    <IconButton onClick={() => handleLogOut()}>
      <Logout color="error" />
    </IconButton>
  );
};

export default LOGOUT;
