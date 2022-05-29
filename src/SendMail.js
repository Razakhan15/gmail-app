import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./feature/mailSlice";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "./SendMail.css";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage())
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        <input
          {...register("message", { required: true })}
          type="text"
          placeholder="Message..."
          className="sendMail_message"
        />
        <div className="sendMail_options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail_send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
