import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import MainVideos from "../components/MainVideos";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import BackToTop from "../components/BackToTop";
// Config
// Utils
import { updateTitle } from "../utils";

// #region component
const Vids = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Hub`);
  }, [userData]);

  return (
    <>
      <NavBar />
      <Hero name={userData.name} />
      <main>
        <MainVideos />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Vids;
