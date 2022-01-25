import React, { useState } from "react";

import { formatRelative } from "date-fns";
import PropTypes from 'prop-types'
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
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const toggle = () => {
    setLike(like + (isLike?-1:1));
      setIsLike(!isLike);
  }
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
         <div className={classes.feedOption} onClick={toggle}>
          <FaRegThumbsUp />
          <p>Like | {like}</p>
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
Feed.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default Feed;
