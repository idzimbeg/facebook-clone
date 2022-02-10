import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

import { useAuth } from "../../contexts/AuthContext";
import { Backdrop, Chat } from "./MessengerStyles";
import "./Messenger.css";

const axios = require("axios").default;

const Messenger = (props) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigate({ pathname: "/" });
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": process.env.REACT_APP_PROJECT_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: { "private-key": process.env.REACT_APP_PRIVATE_KEY },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigate]);

  if (!user || loading) return "Loading...";
  return (
    <Backdrop>
      <Chat>
        <button href="#" onClick={props.onClose}>
          Close
        </button>
        <ChatEngine
          height="75vh"
          projectID={process.env.REACT_APP_PROJECT_ID}
          userName={user.email}
          userSecret={user.uid}
        >
          {/* <ChatList {...props} color="royalblue"/> */}
        </ChatEngine>
      </Chat>
    </Backdrop>
  );
};

export default Messenger;
