import React from "react";
import HomeBanner from "../components/HomeBanner";
import Categories from "../components/Categories";
import { SetTitle } from "../components/SetTitle";
import "../css/untitled.css";
import { SetIcon } from "../components/SetIcon";

const Home = () => {
  return (
    <div>
      <SetIcon />
      <SetTitle title="Home - Mummy Da Dhaba" />
      <HomeBanner />
      <Categories />
    </div>
  );
};

export default Home;
