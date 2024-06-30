import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import MinecraftSkins from "../components/MinecraftSkins";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";

// Utils
import { updateTitle } from "../utils";

// #region component
const Minecraft = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Hub`);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      <main>
        <MinecraftSkins />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Minecraft;
