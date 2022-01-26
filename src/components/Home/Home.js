import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import Contacts from "../Contacts/Contacts";
import Post from "../Post/Post";

import Sidebar from "../Sidebar/Sidebar";
import StoryReel from "../Story/StoryReel";
import { HomeStyle } from "./HomeStyles";

import { useAuthState } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Home = () => {
  const { user, initializing } = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (initializing) return;
    if (!user) return navigate("/");
  }, [user, initializing]);
  return (
    <div style={{ background: "#eff2f5" }}>
      <Navigation user={user} />
      <Sidebar />
      <Contacts />
      <HomeStyle>
        <StoryReel />
      </HomeStyle>
      <Post user={user} />
    </div>
  );
};

export default Home;
