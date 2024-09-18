import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import { Listings } from "../components/Listings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Listings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
