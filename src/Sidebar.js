import React from "react";
import Button from "@mui/material/Button";
import "./Sidebar.css";
import {
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./feature/mailSlice";

function Sidebar() {
  
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<Add fontSize="large" />}
        className="sidebar_compose"
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected />
      <SidebarOption Icon={Star} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={NearMe} title="Sent" number={54} />
      <SidebarOption Icon={Note} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
