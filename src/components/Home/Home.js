import React from "react";

import Navigation from "../Navigation/Navigation";
import Contacts from "../Contacts/Contacts";
import Post from "../Post/Post";

import Sidebar from "../Sidebar/Sidebar";
import StoryReel from "../Story/StoryReel";
import { HomeStyle } from "./HomeStyles";

const Home = () => {
  return (
    <div style={{ background: "#eff2f5" }}>
      <Navigation />
      <Sidebar />
      <Contacts />
      <HomeStyle>
        <StoryReel />
      </HomeStyle>
      <Post />
    </div>
  );
};

export default Home;
