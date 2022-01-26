import Quotes from "../Quotes/Quotes";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.post}>
      <Quotes />
    </div>
  );
};

export default Post;
