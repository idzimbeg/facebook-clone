import React from "react";
import Navigation from "../Navigation/Navigation";
import Contacts from "../Contacts/Contacts";
import Post from "../Post/Post";

import Sidebar from "../Sidebar/Sidebar";
import StoryReel from "../Story/StoryReel";
import { HomeStyle } from "./HomeStyles";

const Home = (user) => {
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
