import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../contexts/AuthContext";

import Portal from "../../portal/Portal";
import { BsFacebook, BsMessenger, BsPlayBtn } from "react-icons/bs";
import { FaBell, FaSearch } from "react-icons/fa";
import { AiOutlineTeam, AiFillHome } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
     auth.signOut();
    navigate({ pathname: "/" });
    return;
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
          <div
            onClick={() => setShowModal(true)}
            className={classes.headerOption}
          >
            <BsMessenger />
          </div>
          <Portal onClose={() => setShowModal(false)} show={showModal}></Portal>
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
        <div onClick={handleLogout} className={classes.headerOption}>
          <h1>
            <IoMdLogOut />
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
