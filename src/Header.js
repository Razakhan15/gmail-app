import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./feature/userSlice";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header_middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
