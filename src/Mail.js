import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";
import { selectOpenMail } from "./feature/mailSlice";
import { useSelector } from "react-redux";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail_toolsRih">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="mail_important" />
          <p>{selectedMail?.title}</p>
          <p className="mail_time">{selectedMail?.time}</p>
        </div>
        <div className="mail_message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
