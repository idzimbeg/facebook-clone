import React from "react";

import { formatRelative } from "date-fns";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

import classes from "./Feed.module.css";

const formatDate = (date) => {
  let formattedDate = "";
  if (date) {
    formattedDate = formatRelative(date, new Date());
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Feed = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  if (!text) return null;
  return (
    <div className={classes.feed}>
      {photoURL ? (
        <img
          src={photoURL}
          alt="Avatar"
          width={45}
          height={45}
          className={classes.feedAvatar}
        />
      ) : null}
      {displayName ? (
        <small className={classes.feedTopInfo}>{displayName}</small>
      ) : null}
      <br />
      {createdAt?.seconds ? (
        <span>{formatDate(new Date(createdAt.seconds * 1000))}</span>
      ) : null}
      <p className={classes.feedBottom}>{text}</p>
      <div className={classes.feedOptions}>
        <div className={classes.feedOption}>
          <FaRegThumbsUp />
          <p>Like</p>
        </div>
        <div className={classes.feedOption}>
          <FaRegCommentAlt />
          <p>Comment</p>
        </div>

        <div className={classes.feedOption}>
          <FiShare />
          <p>Share</p>
        </div>

        <div className={classes.feedOption}>
          <BsPersonCircle />
        </div>
      </div>
    </div>
  );
};

export default Feed;
