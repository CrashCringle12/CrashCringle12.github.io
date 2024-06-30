import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Videos from "../components/Videos";
import StepCharts from "../components/StepCharts";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { filteredProjects, moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Hub`);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      <main>
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Videos />
        <StepCharts filteredProjects={filteredProjects} />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
