import React, { useContext } from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import { AppContext } from "../../Context/AppContext";
import { CancelOutlined } from "@mui/icons-material";

const CustomAlert = () => {
  const { alert, openAlert, setOpenAlert, severity } = useContext(AppContext);
  return (
    <Collapse
      in={openAlert}
      sx={{ position: "absolute", bottom: "10px", right: "10px" }}
    >
      <Alert
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpenAlert(false);
            }}
          >
            <CancelOutlined />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {alert}
      </Alert>
    </Collapse>
  );
};

export default CustomAlert;
