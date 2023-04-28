import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOptions from "./SidebarOptions";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { OpenSendMessage } from "../features/mailSlice";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(OpenSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={87}
        selected={true}
      />
      <SidebarOptions Icon={StarBorderIcon} title="Starred" number={30} />
      <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number={20} />
      <SidebarOptions Icon={LabelImportantIcon} title="Important" number={34} />
      <SidebarOptions Icon={NearMeIcon} title="Sent" number={78} />
      <SidebarOptions Icon={NoteIcon} title="Drafts" number={99} />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number={45} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
