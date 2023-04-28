import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedMail } from "../features/mailSlice";
function EmailRow({ id, title, subject, description, time }) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const openMail = () => {
    dispatch(
      selectedMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
        <h3 className="emailRow__title">{title}:</h3>
        <div className="emailRow__message">
          <h4>
            {subject}{" "}
            <span className="emailRow__description">-{description}</span>
          </h4>
        </div>
        <p className="emailRow__time">{time}</p>
      </div>
    </div>
  );
}

export default EmailRow;
