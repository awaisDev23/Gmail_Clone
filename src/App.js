import React, { useEffect } from "react";
import "./App.css";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
// import SignIn from "./components/Login";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters(
        {
          prompt: "select_account",
        },
        []
      );
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
  });
  return (
    <>
      <Router>
        {user ? (
          <Login />
        ) : (
          <div className="App">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/mail" element={<Mail />} />
                <Route path="/" element={<EmailList />} />
                <Route path="/mail" element={<SendMail />} />
              </Routes>
            </div>
            {sendMessageIsOpen && <SendMail />}
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
