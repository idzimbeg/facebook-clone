import React from "react";
import classes from "./Story.module.css";
import { SiGravatar } from "react-icons/si";

const Story = ({ image, title }) => {
  return (
    <div
      className={classes.story}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      <SiGravatar className={classes.storyAvatar} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
