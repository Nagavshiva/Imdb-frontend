import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Modal,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/reducers/userReducer";
import MovieForm from "./MovieForm";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(logoutUser());
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "gold", color: "white" }}
        >
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                  src="https://icons.iconarchive.com/icons/uiconstock/socialmedia/512/IMDb-icon.png"
                  alt="IMDb"
                />
              </Link>
            </Typography>
            <Tooltip title="fav">
              <IconButton size="large" color="inherit">
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="add movie">
              <IconButton
                size="large"
                color="inherit"
                onClick={handleOpenModal}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>

            {currentUser ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    {currentUser.userName}
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div style={{ marginTop: "0.5rem" }}>
                <Link to="../login" relative="path">
                  <Button color="inherit">SignIn</Button>
                </Link>
                <Link to="../reg" relative="path">
                  <Button color="inherit">SignUp</Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* MovieForm Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="movie-form-modal"
        aria-describedby="movie-form-modal-description"
      >
        <MovieForm onCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Navbar;
