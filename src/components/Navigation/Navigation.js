import { BsFacebook, BsMessenger, BsPlayBtn } from "react-icons/bs";
import { FaBell, FaSearch } from "react-icons/fa";
import { AiOutlineTeam, AiFillHome } from "react-icons/ai";
import { IoMdSettings, IoMdLogOut } from "react-icons/io";
import classes from "./Navigation.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { logout } from "../firebase/firebase";

const Navigation = (user) => {
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <h1>
          <BsFacebook className={classes.headerOption} />
        </h1>
        <div className={classes.headerInput}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search Facebook"
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.headerCenter}>
        <h1>
          <BsMessenger className={classes.headerOption} />
        </h1>
        <h1>
          <FaBell className={classes.headerOption} />
        </h1>
        <h1>
          <AiOutlineTeam className={classes.headerOption} />
        </h1>
        <h1>
          <AiFillHome className={classes.headerOption} />
        </h1>
        <h1>
          <BsPlayBtn className={classes.headerOption} />
        </h1>
      </div>
      {user ? (
        <div onClick={signOut} className={classes.headerOption}>
          <h1>
            <IoMdSettings />
          </h1>
        </div>
      ) : null}
      <div onClick={logout} className={classes.headerOption}>
        <h1>
          <IoMdLogOut />
        </h1>
      </div>
    </div>
  );
};

export default Navigation;
