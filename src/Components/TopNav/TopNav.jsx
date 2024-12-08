import React, { useContext, useState } from "react";
import "./TopNav.css";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { authLinks, pages } from "../../json/pages";
import LOGOUT from "../LOGOUT/LOGOUT";

const TopNav = ({ branding }) => {
  const { login, user } = useContext(AppContext);

  return (
    <Container sx={{ ...styles.container }}>
      <Box sx={{ ...styles.logo }}>
        <img
          src={branding.logo}
          alt={branding.name}
          style={{ ...styles.logoImg }}
          className="logo-img"
        />
        {branding.allowLogoText && (
          <Typography variant="h4" className="logo-text">
            {branding.name.toUpperCase()}
          </Typography>
        )}
        <Links links={pages} />
      </Box>
      {login ? <UserMenu /> : <Links links={authLinks} />}
    </Container>
  );
};

const Links = ({ links = [] }) => {
  const { login, user } = useContext(AppContext);
  return (
    <Box sx={{ ...styles.links }}>
      {links.map((link) => {
        if (link.allowed) {
          if (!link.auth || (login && link.allowedRole === user.role)) {
            return (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
              >
                {link.title.toUpperCase()}
              </NavLink>
            );
          }
        }
        return null;
      })}
    </Box>
  );
};

const UserMenu = () => {
  const { user } = useContext(AppContext);
  const style = {};
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="User Account Area">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 30, height: 30, backgroundColor: "white" }}>
            <img
              src={user.image}
              alt={user.firstName + user.lastName}
              style={{ height: 30 }}
            />
          </Avatar>
        </IconButton>
      </Tooltip>
      <div className="nav-menu">
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link style={{ color: "black" }} to="/user">
            <MenuItem onClick={handleClose} sx={style}>
              <Box
                sx={{
                  borderRadius: "50%",
                  contain: "content",
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={user.image} alt="" style={{ height: "25px" }} />
              </Box>
              &nbsp; &nbsp;
              {user.name}
            </MenuItem>
          </Link>
          <Link to="/user/wishlist" style={{ color: "black" }}>
            <MenuItem onClick={handleClose} sx={style}>
              My Wishlist
            </MenuItem>
          </Link>
          <Link to="/user/orders" style={{ color: "black" }}>
            <MenuItem onClick={handleClose} sx={style}>
              My Orders
            </MenuItem>
          </Link>
          <MenuItem sx={style}>
            <LOGOUT />
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #dfdfdf",
    minWidth: "100%",
    padding: "10px 0",
    position: "sticky",
    top: "0",
    backgroundColor: "#fff",
    zIndex: 1000,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    cursor: "pointer",
  },
  logoImg: {
    height: "50px",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
};

export default TopNav;
