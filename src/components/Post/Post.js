import { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Feed from "../Feed/Feed";
import Quotes from "../Quotes/Quotes";
import { useAuth } from "../../contexts/AuthContext";
import classes from "./Post.module.css";

const Post = () => {
  const [newMessage, setNewMessage] = useState("");
  const db = firebase.firestore();
  const { user } = useAuth();

  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt", "desc").limit(100);
  const [messages] = useCollectionData(query, { idField: "id" });

  const inputRef = useRef();
  const bottomListRef = useRef();

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleOnChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        displayName,
        photoURL,
        uid,
      });
      setNewMessage("");
      bottomListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes.post}>
      <form onSubmit={handleOnSubmit}>
        <textarea
          ref={inputRef}
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="What's on your mind?"
        />
        <br />
        <button type="submit" disabled={!newMessage}>
          Post
        </button>
      </form>
      <ul>
        {messages
          ?.sort((first, second) =>
            first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1
          )
          ?.map((message) => (
            <li key={message.id}>
              <Feed {...message} />
            </li>
          ))}
      </ul>
      <div ref={bottomListRef} />
      <Quotes />
    </div>
  );
};

export default Post;
