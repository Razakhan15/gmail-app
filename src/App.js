import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Mail from "./Mail";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";
import { selectSendMessageIsOpen } from "./feature/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./feature/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const sendMessagesIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  },[]);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<EmailList />}></Route>
              <Route path="/mail" element={<Mail />}></Route>
            </Routes>
          </div>
          {sendMessagesIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
