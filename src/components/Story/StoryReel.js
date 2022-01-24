import React from "react";
import classes from "./StoryReel.module.css";

import Story from "./Story";

import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";

const StoryReel = () => {
  return (
    <div className={classes.storyReel}>
      <Story image={photo1} />
      <Story image={photo2} />
      <Story image={photo3} />
      <Story image={photo4} />
      <Story image={photo5} />
    </div>
  );
};

export default StoryReel;
