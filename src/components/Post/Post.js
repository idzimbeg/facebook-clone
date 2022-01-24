import { useState, useEffect, useRef } from "react";
import firebase from 'firebase/compat/app';
import { useFirestoreQuery } from '../../hooks/Hooks';
import Feed from '../Feed/Feed';
import classes from './Post.module.css';
import Quotes from '../Quotes/Quotes';

const Post = ({ user = null }) => {
  const db = firebase.firestore();
  const messagesRef = db.collection('messages');
  const messages = useFirestoreQuery(
    messagesRef.orderBy('createdAt', 'desc').limit(100)
    );
    const [newMessage, setNewMessage] = useState('');
  const inputRef = useRef();
  const bottomListRef = useRef();

  const { uid, displayName, photoURL } = user;


  useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
  }, [inputRef]);

  const handleOnChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
        messagesRef.add({
            text: trimmedMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            displayName,
            photoURL,
        });
        setNewMessage('');
        bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} className={classes.post}>
        <textarea
          ref={inputRef}
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="What's on your mind?"
          className={classes.textarea}
        />
        {newMessage &&
        (<button type="submit" className={classes.button}>
          Post
        </button>)}
      </form>
      <ul className={classes.post}>{messages?.sort((first, second) => first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1)?.map(message => (
        <li key={message.id}><Feed {...message} /></li>
        ))}
        <br/>
        <Quotes />
      </ul>
      <div ref={bottomListRef} />
    </>
  );
};

export default Post;