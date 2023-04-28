import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
    dispatch();
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        ></img>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <TuneIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Stack direction="row" spacing={2}>
            <Avatar onClick={signOut} alt="Profile Pic" src={user?.photoURL} />
          </Stack>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
